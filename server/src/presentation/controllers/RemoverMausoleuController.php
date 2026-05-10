<?php

namespace Server\presentation\controllers;

use Server\application\useCases\RemoverMausoleuUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class RemoverMausoleuController implements Controller
{
    private RemoverMausoleuUseCase $removerMausoleuUseCase;

    public function __construct(RemoverMausoleuUseCase $removerMausoleuUseCase)
    {
        $this->removerMausoleuUseCase = $removerMausoleuUseCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;

            $this->removerMausoleuUseCase->execute($id);

            return Responses::OK([
                'message' => 'Registro removido com sucesso!',
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
