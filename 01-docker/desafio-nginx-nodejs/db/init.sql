CREATE DATABASE IF NOT EXISTS fullcycle;
USE fullcycle;

CREATE TABLE pessoa (
  id integer not null auto_increment PRIMARY KEY,
  nome varchar(255)
);