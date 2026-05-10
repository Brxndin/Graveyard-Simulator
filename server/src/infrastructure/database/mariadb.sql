CREATE DATABASE graveyard_simulator;

USE graveyard_simulator;

CREATE TABLE mausoleus(
    id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(200) NOT NULL,
    lugares int NOT NULL
);

CREATE TABLE assombracoes(
    id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(200) NOT NULL,
    tipo int NOT NULL,
    mausoleu_id int,

    FOREIGN KEY (mausoleu_id) REFERENCES mausoleus(id)
);
