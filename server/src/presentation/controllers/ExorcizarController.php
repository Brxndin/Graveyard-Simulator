<?php

namespace Server\presentation\controllers;

use Server\application\useCases\ExorcizarUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class ExorcizarController implements Controller
{
    private ExorcizarUseCase $useCase;

    public function __construct(ExorcizarUseCase $useCase)
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
