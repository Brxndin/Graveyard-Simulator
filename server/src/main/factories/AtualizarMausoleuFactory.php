<?php

namespace Server\main\factories;

use Server\application\useCases\AtualizarMausoleuUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOMausoleuRepository;
use Server\presentation\controllers\AtualizarMausoleuController;
use Server\presentation\protocols\Controller;

class AtualizarMausoleuFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOMausoleuRepository($pdo);
        $useCase = new AtualizarMausoleuUseCase($repository);

        return new AtualizarMausoleuController($useCase);
    }
}
