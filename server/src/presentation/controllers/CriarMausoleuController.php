<?php

namespace Server\presentation\controllers;

use Server\application\useCases\CriarMausoleuUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class CriarMausoleuController implements Controller
{
    private CriarMausoleuUseCase $useCase;

    public function __construct(CriarMausoleuUseCase $useCase)
    {
        $this->useCase = $useCase;
    }

    public function handle(array $request): array
    {
        try {
            $dados = $request['body'];

            $mausoleu = $this->useCase->execute($dados);

            return Responses::created([
                'message' => 'Registro criado com sucesso!',
                'data' => [
                    'mausoleu' => $mausoleu
                ]
            ]);
        } catch (Throwable $error) {
            return Responses::validaErro($error);
        }
    }
}
