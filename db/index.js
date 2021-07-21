const { get } = require('jquery');
const mysql = require('mysql');
const sqlConfig = require('./config.js');

const connection = mysql.createConnection(sqlConfig);
connection.connect();

const getAllCards = (cb)=>{
  connection.query('select * from card', (err, results)=>{
    if (err) {

      throw err;
    } 

    cb (results) //send back to server 
  });
};
const checkDuplicateUser = (username,cb) =>{
  connection.query(`select username from user where username = '${username}';`, (dbFuncErr, successResults)=>{

    if(dbFuncErr) {
      cb(dbFuncErr, null);
    }else {
      cb(null, successResults);

    } 
    
  });
}


const insertNewUser = (firstname, lastname, password, username, cb)=>{
  connection.query(`insert into user (username, firstname, lastname, password) values ('${username}','${firstname}', '${lastname}', '${password}');`, (dbFuncErr, results)=>{
    if(dbFuncErr) {

      cb(dbFuncErr, null);
    } 

    cb(null, results);
  })
}
const signIn = (username, cb)=>{
  connection.query(`select user_id, firstname, lastname, password from user where username = '${username}';`, (dbFuncErr, successResults)=>{

    if(dbFuncErr) {
      cb(dbFuncErr, null);
    }else {
      cb(null, successResults);

    } 
    
  });
}

// const getallcards = (user_id, cb)=>{
// connection.query( `select subject, question, answer 
//                   from card 
//                   inner join user
//                   on user.user_id = card.user_id
//                   where user.user_id = ${user_id};
//                   `, (dbFuncErr, successResults)=>{

//                     if(dbFuncErr) {
//                       cb(dbFuncErr, null);
//                     }else {
//                       cb(null, successResults);
                
//                     } 
                    
//                   });
//                 }
const getallcards = (user_id, cb)=>{
  connection.query( `select subject, question, answer 
                    from card 
                    where user_id = ${user_id};
                    `, (dbFuncErr, successResults)=>{
  
                      if(dbFuncErr) {
                        cb(dbFuncErr, null);
                      }else {
                        cb(null, successResults);
                  
                      } 
                      
                    });
                  }
// need to create a way to check for duplicate subject 
const createSubject = (subject, user_id, cb)=>{
connection.query(`
insert into card (subject, user_id) values 
('${subject}', '${user_id}');`, (dbFuncErr, results)=>{
  if(dbFuncErr) {

    cb(dbFuncErr, null);
  } 

  cb(null, results);
})
}
const getFlashcardsBySubject = (subject, user_id, cb) =>{
  connection.query(`select subject, question, answer from card where user_id = ${user_id} and subject = '${subject}';`, (dbFuncErr, results)=>{
    if(dbFuncErr) {
  
      cb(dbFuncErr, null);
    } 
  
    cb(null, results);
  })
}
module.exports = {
  getAllCards, 
  insertNewUser, 
  signIn, 
  checkDuplicateUser,
  getallcards,
  createSubject,
  getFlashcardsBySubject
  // createCards,
  // insertCard
}