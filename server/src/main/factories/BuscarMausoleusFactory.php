<?php

namespace Server\main\factories;

use Server\application\useCases\BuscarMausoleusUseCase;
use Server\infrastructure\database\PDOConnection;
use Server\infrastructure\repositories\MockMausoleuRepository;
use Server\infrastructure\repositories\PDOMausoleuRepository;
use Server\presentation\controllers\BuscarMausoleusController;
use Server\presentation\protocols\Controller;

class BuscarMausoleusFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOMausoleuRepository($pdo);
        $useCase = new BuscarMausoleusUseCase($repository);

        return new BuscarMausoleusController($useCase);
    }
}
