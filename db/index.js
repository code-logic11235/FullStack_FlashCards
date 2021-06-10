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
// const insertCard = (data)=>{
//   connection.query(`insert into ${table} (question, answer) values ("${data.question}", "${data.answer}")`)
// }
// const createCards = (data, cb)=>{
//   connection.query(`create table if not exists ${data.subject} (
//     id int not null auto_increment,
//     question varchar(155) not null,
//     answer varchar(255) not null,
//     primary key (id) 
//   )`, (err, results)=>{
//     if (err) throw err;
//     cb(results)
//   });
// };

module.exports = {
  getAllCards
  // createCards,
  // insertCard
}