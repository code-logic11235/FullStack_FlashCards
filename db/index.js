const mysql = require('mysql');
const sqlConfig = require('./config.js');

const connection = mysql.createConnection(sqlConfig);
connection.connect();

const getAllCards = (cb)=>{
  connection.query('select * from cards', (err, results)=>{
    if (err) {

      throw err;
    } 

    cb (results) //send back to server 
  });
};
const checkDuplicateUser = (username,cb) =>{
  connection.query(`select username from users where username = '${username}';`, (dbFuncErr, successResults)=>{

    if(dbFuncErr) {
      cb(dbFuncErr, null);
    }else {
      cb(null, successResults);

    } 
    
  });
}


const insertNewUser = (firstname, lastname, password, username, cb)=>{
  connection.query(`insert into users (username, firstname, lastname, password) values ('${username}','${firstname}', '${lastname}', '${password}');`, (dbFuncErr, results)=>{
    if(dbFuncErr) {

      cb(dbFuncErr, null);
    } 

    cb(null, results);
  })
}
const signIn = (username, cb)=>{
  connection.query(`select users_id, firstname, lastname, password from users where username = '${username}';`, (dbFuncErr, successResults)=>{

    if(dbFuncErr) {
      cb(dbFuncErr, null);
    }else {
      cb(null, successResults);

    } 
    
  });
}



module.exports = {
  getAllCards, insertNewUser, signIn, checkDuplicateUser
  // createCards,
  // insertCard
}