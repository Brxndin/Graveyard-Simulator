<?php

namespace Server\main\routes;

use Server\main\adapters\SlimAdaptRoutes;
use Server\main\factories\AtualizarMausoleuFactory;
use Server\main\factories\BuscarMausoleuFactory;
use Server\main\factories\BuscarMausoleusFactory;
use Server\main\factories\CriarMausoleuFactory;
use Server\main\factories\RemoverMausoleuFactory;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;

class MausoleuRoutes
{
    public static function register(App $app)
    {
        $app->group('/mausoleus', function (RouteCollectorProxy $group) {
            $group->get('/', SlimAdaptRoutes::handle(BuscarMausoleusFactory::make()));
            $group->get('/{id}', SlimAdaptRoutes::handle(BuscarMausoleuFactory::make()));
            $group->post('/', SlimAdaptRoutes::handle(CriarMausoleuFactory::make()));
            $group->put('/{id}', SlimAdaptRoutes::handle(AtualizarMausoleuFactory::make()));
            $group->delete('/{id}', SlimAdaptRoutes::handle(RemoverMausoleuFactory::make()));
        });
    }
}
