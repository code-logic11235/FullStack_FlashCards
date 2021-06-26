DROP DATABASE IF EXISTS flashcards;

CREATE DATABASE flashcards;

USE flashcards;

CREATE TABLE cards (
  id int NOT NULL AUTO_INCREMENT,
  question varchar(255)  NOT NULL,
  answer varchar(255) NOT NULL,
  -- rom varchar(255) NOT NULL,
  -- status ENUM('Not yet', 'Almost', 'Got it') NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar (50) NOT NULL,
  email varchar(100)  NOT NULL,
  password varchar(255) NOT NULL,
  created_at timestamp not null default current_timestamp, 
  -- rom varchar(255) NOT NULL,
  -- status ENUM('Not yet', 'Almost', 'Got it') NOT NULL,
  PRIMARY KEY (id)
);
