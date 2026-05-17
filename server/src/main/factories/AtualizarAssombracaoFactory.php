<?php

namespace Server\main\factories;

use Server\application\useCases\AtualizarAssombracaoUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOAssombracaoRepository;
use Server\presentation\controllers\AtualizarAssombracaoController;
use Server\presentation\protocols\Controller;

class AtualizarAssombracaoFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOAssombracaoRepository($pdo);
        $useCase = new AtualizarAssombracaoUseCase($repository);

        return new AtualizarAssombracaoController($useCase);
    }
}
