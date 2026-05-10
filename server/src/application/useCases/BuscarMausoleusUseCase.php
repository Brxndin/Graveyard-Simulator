<?php

namespace Server\application\useCases;

use Server\domain\repositories\MausoleuRepository;

class BuscarMausoleusUseCase
{
    private MausoleuRepository $mausoleuRepository;

    public function __construct(MausoleuRepository $mausoleuRepository)
    {
        $this->mausoleuRepository = $mausoleuRepository;
    }

    public function execute(): array
    {
        return $this->mausoleuRepository->get();
    }
}
