<?php

namespace Server\presentation\controllers;

use Server\application\useCases\CriarAssombracaoUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class CriarAssombracaoController implements Controller
{
    private CriarAssombracaoUseCase $criarAssombracaoUseCase;

    public function __construct(CriarAssombracaoUseCase $criarAssombracaoUseCase)
    {
        $this->criarAssombracaoUseCase = $criarAssombracaoUseCase;
    }

    public function handle(array $request): array
    {
        try {
            $dados = $request['body'];

            $assombracao = $this->criarAssombracaoUseCase->execute($dados);

            return Responses::created([
                'message' => 'Registro criado com sucesso!',
                'data' => [
                    'assombracao' => $assombracao
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
