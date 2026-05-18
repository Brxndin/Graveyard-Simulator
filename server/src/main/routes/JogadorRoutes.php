<?php

namespace Server\main\routes;

use Server\main\adapters\SlimAdaptRoutes;
use Server\main\factories\AtualizarJogadorFactory;
use Server\main\factories\BuscarJogadorFactory;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;

class JogadorRoutes
{
    public static function register(App $app)
    {
        $app->group('/jogadores', function (RouteCollectorProxy $group) {
            $group->get('/{id}', SlimAdaptRoutes::handle(BuscarJogadorFactory::make()));
            $group->put('/{id}', SlimAdaptRoutes::handle(AtualizarJogadorFactory::make()));
        });
    }
}
