<?php

namespace Server\presentation\controllers;

use Server\application\useCases\AtualizarAssombracaoUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class AtualizarAssombracaoController implements Controller
{
    private AtualizarAssombracaoUseCase $useCase;

    public function __construct(AtualizarAssombracaoUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;
            $dados = $request['body'];

            $assombracao = $this->useCase->execute($id, $dados);

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
