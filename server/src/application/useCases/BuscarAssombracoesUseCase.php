<?php

namespace Server\application\useCases;

use Server\domain\repositories\AssombracaoRepository;

class BuscarAssombracoesUseCase
{
    private AssombracaoRepository $repository;

    public function __construct(AssombracaoRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(): array
    {
        return $this->repository->get();
    }
}
