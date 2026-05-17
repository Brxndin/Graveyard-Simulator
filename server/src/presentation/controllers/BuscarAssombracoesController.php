<?php

namespace Server\presentation\controllers;

use Server\application\useCases\BuscarAssombracoesUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class BuscarAssombracoesController implements Controller
{
    private BuscarAssombracoesUseCase $useCase;

    public function __construct(BuscarAssombracoesUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $assombracoes = $this->useCase->execute();

            if (empty($assombracoes)) {
                return Responses::notFound('Não foi possível encontrar nenhuma assombração!');
            }

            return Responses::OK([
                'message' => 'Busca realizada com sucesso!',
                'data' => [
                    'assombracoes' => $assombracoes
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
