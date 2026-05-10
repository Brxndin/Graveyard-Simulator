<?php

namespace Server\main\routes;

use Server\main\adapters\SlimAdaptRoutes;
use Server\main\factories\AtualizarAssombracaoFactory;
use Server\main\factories\BuscarAssombracaoFactory;
use Server\main\factories\BuscarAssombracoesFactory;
use Server\main\factories\CriarAssombracaoFactory;
use Server\main\factories\RemoverAssombracaoFactory;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;

class AssombracaoRoutes
{
    public static function register(App $app)
    {
        $app->group('/assombracoes', function (RouteCollectorProxy $group) {
            $group->get('/', SlimAdaptRoutes::handle(BuscarAssombracoesFactory::make()));
            $group->get('/{id}', SlimAdaptRoutes::handle(BuscarAssombracaoFactory::make()));
            $group->post('/', SlimAdaptRoutes::handle(CriarAssombracaoFactory::make()));
            $group->put('/{id}', SlimAdaptRoutes::handle(AtualizarAssombracaoFactory::make()));
            $group->delete('/{id}', SlimAdaptRoutes::handle(RemoverAssombracaoFactory::make()));
        });
    }
}
