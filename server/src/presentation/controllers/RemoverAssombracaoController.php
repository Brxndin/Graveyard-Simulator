<?php

namespace Server\presentation\controllers;

use Server\application\useCases\RemoverAssombracaoUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class RemoverAssombracaoController implements Controller
{
    private RemoverAssombracaoUseCase $useCase;

    public function __construct(RemoverAssombracaoUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;

            $this->useCase->execute($id);

            return Responses::OK([
                'message' => 'Registro removido com sucesso!',
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
