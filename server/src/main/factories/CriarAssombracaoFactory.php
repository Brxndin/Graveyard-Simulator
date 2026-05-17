<?php

namespace Server\main\factories;

use Server\application\useCases\CriarAssombracaoUseCase;
use Server\infrastructure\database\config\PDOConnection;
use Server\infrastructure\repositories\PDOAssombracaoRepository;
use Server\presentation\controllers\CriarAssombracaoController;
use Server\presentation\protocols\Controller;

class CriarAssombracaoFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOAssombracaoRepository($pdo);
        $useCase = new CriarAssombracaoUseCase($repository);

        return new CriarAssombracaoController($useCase);
    }
}
