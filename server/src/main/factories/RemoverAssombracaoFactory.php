<?php

namespace Server\main\factories;

use Server\application\useCases\RemoverAssombracaoUseCase;
use Server\infrastructure\database\PDOConnection;
use Server\infrastructure\repositories\PDOAssombracaoRepository;
use Server\presentation\controllers\RemoverAssombracaoController;
use Server\presentation\protocols\Controller;

class RemoverAssombracaoFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOAssombracaoRepository($pdo);
        $useCase = new RemoverAssombracaoUseCase($repository);

        return new RemoverAssombracaoController($useCase);
    }
}
