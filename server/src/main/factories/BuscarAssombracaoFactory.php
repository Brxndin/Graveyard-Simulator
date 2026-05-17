<?php

namespace Server\main\factories;

use Server\application\useCases\BuscarAssombracaoUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOAssombracaoRepository;
use Server\presentation\controllers\BuscarAssombracaoController;
use Server\presentation\protocols\Controller;

class BuscarAssombracaoFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOAssombracaoRepository($pdo);
        $useCase = new BuscarAssombracaoUseCase($repository);

        return new BuscarAssombracaoController($useCase);
    }
}
