CREATE DATABASE graveyard_simulator;

USE graveyard_simulator;

CREATE TABLE jogadores(
    id int PRIMARY KEY AUTO_INCREMENT,
    energia int NOT NULL,
    dinheiro int NOT NULL,
    energia_maxima int NOT NULL
);

-- inserção do único jogador com valores iniciais
INSERT INTO jogadores
(energia, dinheiro, energia_maxima)
VALUES (200, 0, 200);

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
