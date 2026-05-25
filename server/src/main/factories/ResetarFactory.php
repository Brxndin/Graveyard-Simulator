<?php

namespace Server\main\factories;

use Server\application\useCases\ResetarUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOJogadorRepository;
use Server\presentation\controllers\ResetarController;
use Server\presentation\protocols\Controller;

class ResetarFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOJogadorRepository($pdo);
        $useCase = new ResetarUseCase($repository);

        return new ResetarController($useCase);
    }
}
