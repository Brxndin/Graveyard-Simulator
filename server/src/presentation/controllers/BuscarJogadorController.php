<?php

namespace Server\presentation\controllers;

use Server\application\useCases\BuscarJogadorUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class BuscarJogadorController implements Controller
{
    private BuscarJogadorUseCase $useCase;

    public function __construct(BuscarJogadorUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? 0;

            $jogador = $this->useCase->execute($id);

            if (!$jogador) {
                return Responses::notFound('Não foi possível encontrar o jogador!');
            }

            return Responses::OK([
                'message' => 'Busca realizada com sucesso!',
                'data' => [
                    'jogador' => $jogador
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
