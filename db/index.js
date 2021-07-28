const { get } = require('jquery');
const mysql = require('mysql');
const sqlConfig = require('./config.js');

const connection = mysql.createConnection(sqlConfig);
connection.connect();

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
const getAllSubject = (user_id, cb)=>{
  connection.query(`select subject_id, subject from subject where user_id = ${user_id};`, (dbFuncErr, successResults)=>{
  
    if(dbFuncErr) {
      cb(dbFuncErr, null);
    }else {
      cb(null, successResults);

    } 
    
  });
}
  const getAllCardsBySubject =(subject_id, cb) =>{
    connection.query(`select question, answer from card 
                      inner join subject 
                      on subject.subject_id = card.subject_id
                      where subject.subject_id = ${subject_id};` , (dbFuncErr, successResults)=>{
  
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
insert into subject (subject, user_id) values 
('${subject}', '${user_id}');`, (dbFuncErr, results)=>{
  if(dbFuncErr) {

    cb(dbFuncErr, null);
  } 

  cb(null, results);
})
}

const deleteFlashcard = (question, user_id, cb)=>{
  connection.query(`delete from card where question = '${question}' and subject_id = '${user_id}'`, (dbFuncErr, results)=>{
    if(dbFuncErr) {
  
      cb(dbFuncErr, null);
    } 
  
    cb(null, results);
  })
}

//// user ID dont match much 
const addFlashcard = (values, subject_id, cb)=>{

  connection.query('insert into card (question, answer, subject_id) values ?', 
  [values.map(obj=>[obj.Question, obj.Answer, subject_id])],
   (dbFuncErr, results)=>{
    if(dbFuncErr) {
  
      cb(dbFuncErr, null);
    } 
  
    cb(null, results);
  })
}
const deleteAllFlashcard = (subject_id, cb)=>{
  connection.query(`delete from card where subject_id = ${subject_id};`,
    (dbFuncErr, results)=>{
     if(dbFuncErr) {
       cb(dbFuncErr, null);
     }else {
 
       cb(null, results);
     } 
   })
 }
// 
const deleteSubject = (subject_id, cb)=>{
  connection.query(`delete from subject where subject_id = ${subject_id};`,
    (dbFuncErr, results)=>{
     if(dbFuncErr) {
       cb(dbFuncErr, null);
     }else {
      deleteAllFlashcard(subject_id, cb);

     } 
   })
 }
module.exports = {
  getAllSubject,
  insertNewUser, 
  signIn, 
  checkDuplicateUser,
  getAllCardsBySubject,
  createSubject,
  addFlashcard,
  deleteFlashcard,
  deleteSubject

}