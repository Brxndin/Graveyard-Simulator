<?php

namespace Server\application\useCases;

use Server\domain\repositories\MausoleuRepository;

class BuscarMausoleusUseCase
{
    private MausoleuRepository $repository;

    public function __construct(MausoleuRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(): array
    {
        return $this->repository->get();
    }
}
