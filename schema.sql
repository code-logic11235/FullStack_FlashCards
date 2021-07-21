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
  subject varchar(20) not null,
  question varchar(255)  ,
  answer varchar(255) ,
  user_id int references user(user_id)

);
-- -- insert into user (username, firstname, lastname, password) values ('lee ho', 'lee', 'ho', '123');
-- insert into user (username, firstname, lastname, password) values ('taipham232', 'tai', 'pham', '343');
insert into card (subject, question, answer, user_id) values ('life_deck','what is life?', 'idk?', 1);
insert into card (subject, question, answer, user_id) values ('life_deck','what is money', 'cash?', 1);
insert into card (subject, question, answer, user_id) values ('life_deck','what is boat?', 'hoes?', 1);
insert into card (subject, question, answer, user_id) values ('life_deck','what is house?', 'stability?', 1);


insert into card (subject, question, answer, user_id) values ('animal_deck','what is monkey?', 'furry?', 1);
insert into card (subject, question, answer, user_id) values ('animal_deck','what is cat?', 'mmeow?', 2);
insert into card (subject, question, answer, user_id) values ('animal;_deck','what is dog?', 'woof?',2);
insert into card (subject, question, answer, user_id) values ('life_decker','what is car?', 'vroom?', 2);
insert into card (subject, question, answer, user_id) values ('life_decker','what is life?', 'idk?', 1);
insert into card (subject, question, answer, user_id) values ('life_decker','what is money', 'cash?', 1);
insert into card (subject, question, answer, user_id) values ('life_decks','what is boat?', 'hoes?', 1);
insert into card (subject, question, answer, user_id) values ('life_decks','what is house?', 'stability?', 1);


-- insert into card (deck_name, question, answer, user_id) values ('animal_de','what is monkey?', 'furry?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('animal_de','what is cat?', 'mmeow?', 2);
-- insert into card (deck_name, question, answer, user_id) values ('animal;_dec','what is dog?', 'woof?',2);
-- insert into card (deck_name, question, answer, user_id) values ('life_d','what is car?', 'vroom?', 2);
-- insert into card (deck_name, question, answer, user_id) values ('life_decka','what is life?', 'idk?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck1','what is money', 'cash?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck1','what is boat?', 'hoes?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck1','what is house?', 'stability?', 1);


-- insert into card (deck_name, question, answer, user_id) values ('animal_deck2','what is monkey?', 'furry?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('animal_deck2','what is cat?', 'mmeow?', 2);
-- insert into card (deck_name, question, answer, user_id) values ('animal;_deck2','what is dog?', 'woof?',2);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck2','what is car?', 'vroom?', 2);insert into card (deck_name, question, answer, user_id) values ('life_deck','what is life?', 'idk?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck3','what is money', 'cash?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck3','what is boat?', 'hoes?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck3','what is house?', 'stability?', 1);


-- insert into card (deck_name, question, answer, user_id) values ('animal_deck14','what is monkey?', 'furry?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('animal_deck21','what is cat?', 'mmeow?', 2);
-- insert into card (deck_name, question, answer, user_id) values ('animal;_deck3','what is dog?', 'woof?',2);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck3','what is car?', 'vroom?', 2);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck232','what is life?', 'idk?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck3123','what is money', 'cash?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck321','what is boat?', 'hoes?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck3123','what is house?', 'stability?', 1);


-- insert into card (deck_name, question, answer, user_id) values ('animal_deck3123','what is monkey?', 'furry?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('animal_deck43234','what is cat?', 'mmeow?', 2);
-- insert into card (deck_name, question, answer, user_id) values ('animal;_deck432','what is dog?', 'woof?',2);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck543','what is car?', 'vroom?', 2);insert into card (deck_name, question, answer, user_id) values ('life_deck','what is life?', 'idk?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck54356','what is money', 'cash?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck345','what is boat?', 'hoes?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck342','what is house?', 'stability?', 1);


-- insert into card (deck_name, question, answer, user_id) values ('animal_deck321','what is monkey?', 'furry?', 1);
-- insert into card (deck_name, question, answer, user_id) values ('animal_deck431','what is cat?', 'mmeow?', 2);
-- insert into card (deck_name, question, answer, user_id) values ('animal;_deck231','what is dog?', 'woof?',2);
-- insert into card (deck_name, question, answer, user_id) values ('life_deck3','what is car?', 'vroom?', 2);