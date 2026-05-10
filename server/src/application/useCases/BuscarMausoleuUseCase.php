<?php

namespace Server\application\useCases;

use Server\domain\entities\Mausoleu;
use Server\domain\repositories\MausoleuRepository;

class BuscarMausoleuUseCase
{
    private MausoleuRepository $mausoleuRepository;

    public function __construct(MausoleuRepository $mausoleuRepository)
    {
        $this->mausoleuRepository = $mausoleuRepository;
    }

    public function execute(int $id): Mausoleu | null
    {
        return $this->mausoleuRepository->find($id);
    }
}
