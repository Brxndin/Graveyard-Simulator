<?php

namespace Server\main\factories;

use Server\application\useCases\BuscarAssombracoesUseCase;
use Server\infrastructure\database\PDOConnection;
use Server\infrastructure\repositories\PDOAssombracaoRepository;
use Server\presentation\controllers\BuscarAssombracoesController;
use Server\presentation\protocols\Controller;

class BuscarAssombracoesFactory
{
    public static function make(): Controller
    {
        $pdo = PDOConnection::create();

        $repository = new PDOAssombracaoRepository($pdo);
        $useCase = new BuscarAssombracoesUseCase($repository);

        return new BuscarAssombracoesController($useCase);
    }
}
