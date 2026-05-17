<?php

namespace Server\presentation\controllers;

use Server\application\useCases\BuscarAssombracaoUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class BuscarAssombracaoController implements Controller
{
    private BuscarAssombracaoUseCase $useCase;

    public function __construct(BuscarAssombracaoUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;

            $assombracao = $this->useCase->execute($id);

            if (!$assombracao) {
                return Responses::notFound('Não foi possível encontrar a assombração!');
            }

            return Responses::OK([
                'message' => 'Busca realizada com sucesso!',
                'data' => [
                    'assombracao' => $assombracao
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
