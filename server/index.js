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
const saltRounds = 10;




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



app.get('/api/cards', (req, res) => {
  //TODO - your code here!
  db.getAllCards((data)=>{
    // should have result from client in here via a callback
    res.send(data);

  });
});

app.get('/signin', (req, res)=>{
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  } else {
    res.send({loggedIn: false})
  }
})
app.post('/signin',(req, res)=>{
  console.log('post /signin',req.session)
  const username = req.body.username;
  const password = req.body.password
  db.signIn(username, (error, signInResult)=>{

    if (error) {
      res.send({error: error})
    } 
    if(signInResult.length > 0){
      bcrypt.compare(password, signInResult[0].password, (bcryptFuncErr, matchedResult)=>{
        // console.log(matchedResult);
        if (matchedResult) { // password match 
          req.session.user = signInResult[0].username;
          // console.log('---------match results---------')
          console.log(req.session.user)
          console.log('signin results: ', signInResult)
          
          res.send(signInResult);
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

  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.name;

    bcrypt.hash(password, saltRounds).then((hash)=>{
      db.insertNewUser(email, hash, username, (data)=>{
        // should have result from client in here via a callback
        res.sendStatus(201);
    
      });

    }).catch(error =>{
     res.status(500).json({
       error: error
     })
    });
    

})


app.listen(PORT, () => {

  console.log(`listening on port ${PORT}`)
  console.log('Open up on http://localhost:3000/');
});
