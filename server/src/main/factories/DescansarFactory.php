<?php

namespace Server\main\factories;

use Server\application\useCases\DescansarUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOJogadorRepository;
use Server\presentation\controllers\DescansarController;
use Server\presentation\protocols\Controller;

class DescansarFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOJogadorRepository($pdo);
        $useCase = new DescansarUseCase($repository);

        return new DescansarController($useCase);
    }
}
