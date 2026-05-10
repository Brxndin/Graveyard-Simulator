<?php

namespace Server\main;

use Server\main\routes\AssombracaoRoutes;
use Server\main\routes\MausoleuRoutes;
use Slim\Factory\AppFactory;

class Server
{
    public static function run()
    {
        $app = AppFactory::create();

        $app->addBodyParsingMiddleware();
        $app->addRoutingMiddleware();

        $app->get('/favicon.ico', function ($request, $response) {
            return $response->withStatus(204);
        });

        AssombracaoRoutes::register($app);
        MausoleuRoutes::register($app);

        $app->addErrorMiddleware(true, true, true);

        $app->run();
    }
}
