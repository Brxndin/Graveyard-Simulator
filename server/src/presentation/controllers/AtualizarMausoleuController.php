<?php

namespace Server\presentation\controllers;

use Server\application\useCases\AtualizarMausoleuUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class AtualizarMausoleuController implements Controller
{
    private AtualizarMausoleuUseCase $atualizarMausoleuUseCase;

    public function __construct(AtualizarMausoleuUseCase $atualizarMausoleuUseCase)
    {
        $this->atualizarMausoleuUseCase = $atualizarMausoleuUseCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;
            $dados = $request['body'];

            $mausoleu = $this->atualizarMausoleuUseCase->execute($id, $dados);

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
