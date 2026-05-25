<?php

namespace Server\main\factories;

use Server\application\useCases\ExorcizarUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOJogadorRepository;
use Server\presentation\controllers\ExorcizarController;
use Server\presentation\protocols\Controller;

class ExorcizarFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOJogadorRepository($pdo);
        $useCase = new ExorcizarUseCase($repository);

        return new ExorcizarController($useCase);
    }
}
