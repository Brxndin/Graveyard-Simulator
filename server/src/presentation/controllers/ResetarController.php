<?php

namespace Server\presentation\controllers;

use Server\application\useCases\ResetarUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class ResetarController implements Controller
{
    private ResetarUseCase $useCase;

    public function __construct(ResetarUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;

            $resultado = $this->useCase->execute($id);

            return Responses::OK([
                'message' => 'Requisição finalizada com sucesso.',
                'data' => [
                    'jogador' => $resultado['jogador']
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
