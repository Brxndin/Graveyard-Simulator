CREATE DATABASE graveyard_simulator;

USE graveyard_simulator;

CREATE TABLE jogadores(
    id int PRIMARY KEY AUTO_INCREMENT,
    energia int NOT NULL,
    dinheiro int NOT NULL,
    energia_maxima int NOT NULL,
    dia_atual int NOT NULL,
    assombrometro_atual int NOT NULL
);

-- inserção do único jogador com valores iniciais
INSERT INTO jogadores
(energia, dinheiro, energia_maxima, dia_atual, assombrometro_atual)
VALUES (200, 0, 200, 1, 0);
