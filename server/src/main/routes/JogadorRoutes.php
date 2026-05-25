<?php

namespace Server\main\routes;

use Server\main\adapters\SlimAdaptRoutes;
use Server\main\factories\BuscarJogadorFactory;
use Server\main\factories\DescansarFactory;
use Server\main\factories\VarrerFactory;
use Server\main\factories\AcenderVelasFactory;
use Server\main\factories\ExorcizarFactory;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;

class JogadorRoutes
{
    public static function register(App $app)
    {
        $app->group('/jogadores', function (RouteCollectorProxy $group) {
            $group->get('/{id}', SlimAdaptRoutes::handle(BuscarJogadorFactory::make()));
            $group->post('/descansar/{id}', SlimAdaptRoutes::handle(DescansarFactory::make()));
            $group->post('/varrer/{id}', SlimAdaptRoutes::handle(VarrerFactory::make()));
            $group->post('/acender-velas/{id}', SlimAdaptRoutes::handle(AcenderVelasFactory::make()));
            $group->post('/exorcizar/{id}', SlimAdaptRoutes::handle(ExorcizarFactory::make()));
        });
    }
}
