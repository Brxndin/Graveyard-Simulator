<?php

namespace Server\main\factories;

use Server\application\useCases\BuscarJogadorUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOJogadorRepository;
use Server\presentation\controllers\BuscarJogadorController;
use Server\presentation\protocols\Controller;

class BuscarJogadorFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOJogadorRepository($pdo);
        $useCase = new BuscarJogadorUseCase($repository);

        return new BuscarJogadorController($useCase);
    }
}
