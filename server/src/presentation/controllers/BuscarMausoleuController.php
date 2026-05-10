<?php

namespace Server\presentation\controllers;

use Server\application\useCases\BuscarMausoleuUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class BuscarMausoleuController implements Controller
{
    private BuscarMausoleuUseCase $buscarMausoleuUseCase;

    public function __construct(BuscarMausoleuUseCase $buscarMausoleuUseCase)
    {
        $this->buscarMausoleuUseCase = $buscarMausoleuUseCase;
    }

    public function handle(array $request): array
    {
        try {
            $id = $request['params']['id'] ?? null;

            $mausoleu = $this->buscarMausoleuUseCase->execute($id);

            if (!$mausoleu) {
                return Responses::notFound('Não foi possível encontrar o mausoléu!');
            }

            return Responses::OK([
                'message' => 'Busca realizada com sucesso!',
                'data' => [
                    'mausoleu' => $mausoleu
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
