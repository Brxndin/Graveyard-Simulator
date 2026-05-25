<?php

namespace Server\presentation\controllers;

use Server\application\useCases\DescansarUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class DescansarController implements Controller
{
    private DescansarUseCase $useCase;

    public function __construct(DescansarUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;

            // aqui deverá ser substituído pela lógica de contar o medoCausado das assombrações que sobraram
            $medoCausado = 10;

            $resultado = $this->useCase->execute($id, $medoCausado);

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
