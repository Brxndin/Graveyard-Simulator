<?php

namespace Server\application\useCases;

use DomainException;
use Server\domain\repositories\MausoleuRepository;

class RemoverMausoleuUseCase
{
    private MausoleuRepository $mausoleuRepository;

    public function __construct(MausoleuRepository $mausoleuRepository)
    {
        $this->mausoleuRepository = $mausoleuRepository;
    }

    public function execute(int $id): void
    {
        $linhasAlteradas = $this->mausoleuRepository->delete($id);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi removido!');
        }
    }
}
