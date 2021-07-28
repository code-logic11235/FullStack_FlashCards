DROP DATABASE IF EXISTS flashcards;

CREATE DATABASE flashcards;

USE flashcards;

CREATE TABLE IF NOT EXISTS user (
  user_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar (30) NOT NULL,
  firstname varchar(15)  NOT NULL,
  lastname varchar(30)  NOT NULL,
  password varchar(255) NOT NULL,
  created_at timestamp not null default current_timestamp 

);


CREATE TABLE IF NOT EXISTS card (
  card_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  question varchar(255)  ,
  answer varchar(255) ,
  subject_id int references subject(subject_id)

);

CREATE TABLE IF NOT EXISTS subject (
  subject_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  subject varchar(20) not null,
  user_id int references user(user_id)

);
