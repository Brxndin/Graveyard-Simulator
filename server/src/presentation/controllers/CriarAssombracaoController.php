<?php

namespace Server\presentation\controllers;

use Server\application\useCases\CriarAssombracaoUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class CriarAssombracaoController implements Controller
{
    private CriarAssombracaoUseCase $useCase;

    public function __construct(CriarAssombracaoUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $dados = $request['body'];

            $assombracao = $this->useCase->execute($dados);

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
