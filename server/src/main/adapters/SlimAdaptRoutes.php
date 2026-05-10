<?php

namespace Server\main\adapters;

use Server\presentation\enums\ResponseStatusEnum;
use Server\presentation\protocols\Controller;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

const statusMap = [
    ResponseStatusEnum::OK->value => 200,
    ResponseStatusEnum::CREATED->value => 201,
    ResponseStatusEnum::BAD_REQUEST->value => 400,
    ResponseStatusEnum::NOT_FOUND->value => 404,
    ResponseStatusEnum::UNAUTHORIZED->value => 401,
    ResponseStatusEnum::FORBIDDEN->value => 403,
    ResponseStatusEnum::SERVER_ERROR->value => 500,
];

class SlimAdaptRoutes
{
    public static function handle(Controller $controller)
    {
        return function (Request $request, Response $response, array $args) use ($controller) {
            $defaultRequest = [
                'body' => $request->getParsedBody() ?? [],
                'params' => $args,
                'query' => $request->getQueryParams() ?? []
            ];

            $defaultResponse = $controller->handle($defaultRequest);

            $httpStatusCode = statusMap[$defaultResponse['status']] ?? 500;

            $response->getBody()->write(json_encode($defaultResponse['body'] ?? $defaultResponse));

            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus($httpStatusCode);
        };
    }
}
