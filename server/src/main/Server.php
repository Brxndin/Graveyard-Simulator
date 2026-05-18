<?php

namespace Server\main;

use Server\main\routes\AssombracaoRoutes;
use Server\main\routes\JogadorRoutes;
use Server\main\routes\MausoleuRoutes;
use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class Server
{
    public static function run()
    {
        $app = AppFactory::create();

        $app->addBodyParsingMiddleware();
        $app->addRoutingMiddleware();

        $app->add(function (Request $request, $handler) {
            $response = $handler->handle($request);
            
            return $response
                ->withHeader('Access-Control-Allow-Origin', '*') 
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization, X-Custom-Header')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
                ->withHeader('Access-Control-Allow-Credentials', 'true');
        });

        $app->get('/favicon.ico', function ($request, $response) {
            return $response->withStatus(204);
        });

        $app->options('/[{routes:.+}]', function (Request $request, Response $response) {
            return $response;
        });

        JogadorRoutes::register($app);
        AssombracaoRoutes::register($app);
        MausoleuRoutes::register($app);

        $app->addErrorMiddleware(true, true, true);

        $app->run();
    }
}
