<?php

namespace Server\application\useCases;

use Server\domain\entities\Mausoleu;
use Server\domain\repositories\MausoleuRepository;

class CriarMausoleuUseCase
{
    private MausoleuRepository $mausoleuRepository;

    public function __construct(MausoleuRepository $mausoleuRepository)
    {
        $this->mausoleuRepository = $mausoleuRepository;
    }

    public function execute(array $dados): Mausoleu
    {
        $mausoleu = new Mausoleu(
            nome: $dados['nome'] ?? null,
            lugares: $dados['lugares'] ?? null,
        );

        return $this->mausoleuRepository->insert($mausoleu);
    }
}
