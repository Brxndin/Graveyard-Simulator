<?php

namespace Server\application\useCases;

use DomainException;
use Server\domain\repositories\MausoleuRepository;

class RemoverMausoleuUseCase
{
    private MausoleuRepository $repository;

    public function __construct(MausoleuRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(int $id): void
    {
        $linhasAlteradas = $this->repository->delete($id);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi removido!');
        }
    }
}
