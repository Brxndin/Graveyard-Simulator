<?php

namespace Server\main\factories;

use Server\application\useCases\AcenderVelasUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOJogadorRepository;
use Server\presentation\controllers\AcenderVelasController;
use Server\presentation\protocols\Controller;

class AcenderVelasFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOJogadorRepository($pdo);
        $useCase = new AcenderVelasUseCase($repository);

        return new AcenderVelasController($useCase);
    }
}
