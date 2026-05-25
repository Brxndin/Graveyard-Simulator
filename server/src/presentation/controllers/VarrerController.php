<?php

namespace Server\presentation\controllers;

use Server\application\useCases\VarrerUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class VarrerController implements Controller
{
    private VarrerUseCase $useCase;

    public function __construct(VarrerUseCase $useCase)
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
