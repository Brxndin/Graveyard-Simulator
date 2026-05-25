<?php

namespace Server\main\factories;

use Server\application\useCases\VarrerUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOJogadorRepository;
use Server\presentation\controllers\VarrerController;
use Server\presentation\protocols\Controller;

class VarrerFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOJogadorRepository($pdo);
        $useCase = new VarrerUseCase($repository);

        return new VarrerController($useCase);
    }
}
