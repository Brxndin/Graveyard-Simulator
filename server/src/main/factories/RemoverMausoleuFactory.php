<?php

namespace Server\main\factories;

use Server\application\useCases\RemoverMausoleuUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOMausoleuRepository;
use Server\presentation\controllers\RemoverMausoleuController;
use Server\presentation\protocols\Controller;

class RemoverMausoleuFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOMausoleuRepository($pdo);
        $useCase = new RemoverMausoleuUseCase($repository);

        return new RemoverMausoleuController($useCase);
    }
}
