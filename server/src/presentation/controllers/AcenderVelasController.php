<?php

namespace Server\presentation\controllers;

use Server\application\useCases\AcenderVelasUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class AcenderVelasController implements Controller
{
    private AcenderVelasUseCase $useCase;

    public function __construct(AcenderVelasUseCase $useCase)
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
                    'jogador' => $resultado['jogador'],
                    'mensagem' => $resultado['mensagem'],
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
