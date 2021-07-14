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
  deck_name varchar(20) not null,
  question varchar(255)  NOT NULL,
  answer varchar(255) NOT NULL,
  user_id int references user(user_id)

);
-- insert into user (username, firstname, lastname, password) values ('lee ho', 'lee', 'ho', '123');
-- insert into user (username, firstname, lastname, password) values ('taipham232', 'tai', 'pham', '343');
insert into card (deck_name, question, answer, user_id) values ('life_deck','what is life?', 'idk?', 1);
insert into card (deck_name, question, answer, user_id) values ('life_deck','what is money', 'cash?', 1);
insert into card (deck_name, question, answer, user_id) values ('life_deck','what is boat?', 'hoes?', 1);
insert into card (deck_name, question, answer, user_id) values ('life_deck','what is house?', 'stability?', 1);


insert into card (deck_name, question, answer, user_id) values ('animal_deck','what is monkey?', 'furry?', 1);
insert into card (deck_name, question, answer, user_id) values ('animal_deck','what is cat?', 'mmeow?', 2);
insert into card (deck_name, question, answer, user_id) values ('animal;_deck','what is dog?', 'woof?',2);
insert into card (deck_name, question, answer, user_id) values ('life_deck','what is car?', 'vroom?', 2);
