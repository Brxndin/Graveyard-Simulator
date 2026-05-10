<?php

namespace Server\presentation\controllers;

use Server\application\useCases\BuscarMausoleusUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class BuscarMausoleusController implements Controller
{
    private BuscarMausoleusUseCase $buscarMausoleusUseCase;

    public function __construct(BuscarMausoleusUseCase $buscarMausoleusUseCase)
    {
        $this->buscarMausoleusUseCase = $buscarMausoleusUseCase;
    }

    public function handle(array $request): array
    {
        try {
            $mausoleus = $this->buscarMausoleusUseCase->execute();

            if (empty($mausoleus)) {
                return Responses::notFound('Não foi possível encontrar nenhum mausoléu!');
            }

            return Responses::OK([
                'message' => 'Busca realizada com sucesso!',
                'data' => [
                    'mausoleus' => $mausoleus
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
