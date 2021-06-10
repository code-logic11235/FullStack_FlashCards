const express = require('express');
const app = express();
const PORT = 3000;

const db = require('../db/index.js');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react_client/dist'))

app.get('/api/cards', (req, res) => {
  //TODO - your code here!
  db.getAllCards((data)=>{
    // should have result from client in here via a callback
    res.send(data);

  });
});
// app.post('/api/cards', (req,res) =>{
  
//   db.createCards(req.body, ()=>{
//     console.log('created data lol')

//   })
// })



app.listen(PORT, () => {

  console.log(`listening on port ${PORT}`)
  console.log('Open up on http://localhost:3000/');
});
