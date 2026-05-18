<?php

namespace Server\presentation\controllers;

use Server\application\useCases\AtualizarJogadorUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class AtualizarJogadorController implements Controller
{
    private AtualizarJogadorUseCase $useCase;

    public function __construct(AtualizarJogadorUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;
            $dados = $request['body'];

            $mausoleu = $this->useCase->execute($id, $dados);

            return Responses::OK([
                'message' => 'Registro atualizado com sucesso!',
                'data' => [
                    'mausoleu' => $mausoleu
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
