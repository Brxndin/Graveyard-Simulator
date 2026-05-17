<?php

namespace Server\presentation\controllers;

use Server\application\useCases\BuscarMausoleusUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class BuscarMausoleusController implements Controller
{
    private BuscarMausoleusUseCase $useCase;

    public function __construct(BuscarMausoleusUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $mausoleus = $this->useCase->execute();

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
