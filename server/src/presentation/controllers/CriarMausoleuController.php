<?php

namespace Server\presentation\controllers;

use Server\application\useCases\CriarMausoleuUseCase;
use Server\presentation\protocols\Controller;
use Server\presentation\protocols\Responses;
use Throwable;

class CriarMausoleuController implements Controller
{
    private CriarMausoleuUseCase $criarMausoleuUseCase;

    public function __construct(CriarMausoleuUseCase $criarMausoleuUseCase)
    {
        $this->criarMausoleuUseCase = $criarMausoleuUseCase;
    }

    public function handle(array $request): array
    {
        try {
            $dados = $request['body'];

            $mausoleu = $this->criarMausoleuUseCase->execute($dados);

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
