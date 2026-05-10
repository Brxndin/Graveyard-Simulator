<?php

namespace Server\presentation\controllers;

use Server\application\useCases\AtualizarAssombracaoUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class AtualizarAssombracaoController implements Controller
{
    private AtualizarAssombracaoUseCase $atualizarAssombracaoUseCase;

    public function __construct(AtualizarAssombracaoUseCase $atualizarAssombracaoUseCase)
    {
        $this->atualizarAssombracaoUseCase = $atualizarAssombracaoUseCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;
            $dados = $request['body'];

            $assombracao = $this->atualizarAssombracaoUseCase->execute($id, $dados);

            return Responses::OK([
                'message' => 'Registro atualizado com sucesso!',
                'data' => [
                    'assombracao' => $assombracao
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
