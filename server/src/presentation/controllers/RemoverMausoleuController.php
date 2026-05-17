<?php

namespace Server\presentation\controllers;

use Server\application\useCases\RemoverMausoleuUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class RemoverMausoleuController implements Controller
{
    private RemoverMausoleuUseCase $useCase;

    public function __construct(RemoverMausoleuUseCase $useCase)
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
