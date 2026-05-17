<?php

namespace Server\application\useCases;

use Server\domain\entities\Mausoleu;
use Server\domain\repositories\MausoleuRepository;

class BuscarMausoleuUseCase
{
    private MausoleuRepository $repository;

    public function __construct(MausoleuRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(int $id): Mausoleu | null
    {
        return $this->repository->find($id);
    }
}
