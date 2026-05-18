<?php

namespace Server\main\factories;

use Server\application\useCases\AtualizarJogadorUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOJogadorRepository;
use Server\presentation\controllers\AtualizarJogadorController;
use Server\presentation\protocols\Controller;

class AtualizarJogadorFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOJogadorRepository($pdo);
        $useCase = new AtualizarJogadorUseCase($repository);

        return new AtualizarJogadorController($useCase);
    }
}
