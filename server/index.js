const express = require('express');
const app = express();

const TWO_HOURS = 1000 * 60 * 60 * 2

  
const {
  PORT= 3000,
  NODE_ENV = 'development',
  SESS_NAME = 's_id',
  SESS_SECRET = '-shhhitsASECRET-',
  SESS_LIFETIME = TWO_HOURS
} = process.env

const IN_PROD = NODE_ENV === 'production'
const cors = require('cors');

// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session'); //express is stateless http server. cant store session
// w/ express session we keep state

const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const SALTROUNDS = 10;




app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react_client/dist'))

app.use(cookieParser());  

app.use(cors({
  origin:['http://localhost:3000'],
  method: ['GET','BUG'],
  credentials: true
}));

app.use(session({  
  name: SESS_NAME,
  // key: 'userID',
  secret: SESS_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: SESS_LIFETIME, //session expires in 2 hours
    sameSite: true,
    secure: IN_PROD, // true for product, fine for false in developemnt
    
    
  }
}))



// app.get('/api/cards', (req, res) => {
//   //TODO - your code here!
//   db.getAllCards((data)=>{
//     // should have result from client in here via a callback
//     res.send(data);

//   });
// });
app.get('/logout', (req, res)=>{
  req.session.destroy();
  // req.session=null;
  res.cookie("s_id", "", { expires: new Date() });
  res.send({loggedIn: false, data:''})
  // console.log(req.session)
})

app.post('/checkDuplicateUser', (req, res)=>{
  // console.log(req.body)

  db.checkDuplicateUser(req.body.username, (error, result)=>{
    if (error) {
      res.send({error: error})
    } 
    if(result.length > 0){
      console.log('more than one user');
      res.send(result)
    }
  })
})

app.get('/signin', (req, res)=>{
  if (req.session.user) {
    // console.log('req.session.user:::: ', req.session.user)
    res.send({loggedIn: true, data: req.session.user })
  } else {
    res.send({loggedIn: false})
  }
})
app.post('/signin',(req, res)=>{
  const username = req.body.username;
  const password = req.body.password
  db.signIn(username, (error, signInResult)=>{

    if (error) {
      res.send({error: error})
    } 
    if(signInResult.length > 0){
      bcrypt.compare(password, signInResult[0].password, (bcryptFuncErr, matchedResult)=>{

        if (matchedResult) {
          delete signInResult[0].password
           // password match 
          req.session.user = signInResult[0]
          // console.log('---------match results---------')
          // console.log(req.session.user)
          
          // console.log('signin results: ', signInResult[0])
          
          res.send({loggedIn: true, data: signInResult[0]});
        } else { //password does not match
          res.send({message: 'Wrong username/password combination'});  
        }
      });
    }else { // user does not exist
    res.send({message: 'User does not exist'})
    // console.log(successResult[0].password)
    }
  });
});



app.post('/register', (req, res) => {
  // console.log(req.body)

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  const username = req.body.username;

  db.checkDuplicateUser(req.body.username, (error, result)=>{
    if (error) {
      res.send({error: error})
    } 
    if(result.length > 0){
      // console.log('more than one user');
      res.status(409).send({error: 'username taken'})
    }else {
      
      bcrypt.hash(password, SALTROUNDS).then((hash)=>{
        db.insertNewUser(firstname,lastname, hash, username, (data)=>{
          // should have result from client in here via a callback
          res.sendStatus(201);
      
        });
    
      }).catch(error =>{
       res.status(500).json({
         error: error
       })
      });
    }
  })
})

app.post('/api/getAllCards', (req, res)=>{
  const user_id = req.body.user_id;

  db.getallcards(user_id, (error, results)=>{
    if(error) {
      res.send({error: error})
    } else {
      console.log('---Get ALL CARDS RESULTS: ',results)

    }
  })
})

app.listen(PORT, () => {

  console.log(`listening on port ${PORT}`)
  console.log('Open up on http://localhost:3000/');
});
