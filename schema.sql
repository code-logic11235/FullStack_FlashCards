DROP DATABASE IF EXISTS flashcards;

CREATE DATABASE flashcards;

USE flashcards;

CREATE TABLE IF NOT EXISTS users (
  users_Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar (30) NOT NULL,
  firstname varchar(15)  NOT NULL,
  lastname varchar(30)  NOT NULL,
  password varchar(255) NOT NULL,
  Created_At timestamp not null default current_timestamp 
  -- status ENUM('Not yet', 'Almost', 'Got it') NOT NULL,
  -- PRIMARY KEY (Pk_Users_Id)
);


CREATE TABLE IF NOT EXISTS cards (
  cards_Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  question varchar(255)  NOT NULL,
  answer varchar(255) NOT NULL,
  users_Id int references users(users_Id)
  -- PRIMARY KEY (Pk_Cards_Id)
);