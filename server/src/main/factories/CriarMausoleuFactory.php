<?php

namespace Server\main\factories;

use Server\application\useCases\CriarMausoleuUseCase;
use Server\infrastructure\database\PDOConnection;
use Server\infrastructure\repositories\PDOMausoleuRepository;
use Server\presentation\controllers\CriarMausoleuController;
use Server\presentation\protocols\Controller;

class CriarMausoleuFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOMausoleuRepository($pdo);
        $useCase = new CriarMausoleuUseCase($repository);

        return new CriarMausoleuController($useCase);
    }
}
