<?php

namespace Server\application\useCases;

use Server\domain\entities\Mausoleu;
use Server\domain\repositories\MausoleuRepository;

class CriarMausoleuUseCase
{
    private MausoleuRepository $repository;

    public function __construct(MausoleuRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(array $dados): Mausoleu
    {
        $mausoleu = new Mausoleu(
            nome: $dados['nome'] ?? null,
            lugares: $dados['lugares'] ?? null,
        );

        return $this->repository->insert($mausoleu);
    }
}
