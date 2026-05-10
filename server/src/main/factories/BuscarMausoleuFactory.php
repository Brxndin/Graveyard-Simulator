<?php

namespace Server\main\factories;

use Server\application\useCases\BuscarMausoleuUseCase;
use Server\infrastructure\database\PDOConnection;
use Server\infrastructure\repositories\PDOMausoleuRepository;
use Server\presentation\controllers\BuscarMausoleuController;
use Server\presentation\protocols\Controller;

class BuscarMausoleuFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOMausoleuRepository($pdo);
        $useCase = new BuscarMausoleuUseCase($repository);

        return new BuscarMausoleuController($useCase);
    }
}
