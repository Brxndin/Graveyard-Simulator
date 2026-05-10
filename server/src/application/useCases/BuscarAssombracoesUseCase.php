<?php

namespace Server\application\useCases;

use Server\domain\repositories\AssombracaoRepository;

class BuscarAssombracoesUseCase
{
    private AssombracaoRepository $assombracaoRepository;

    public function __construct(AssombracaoRepository $assombracaoRepository)
    {
        $this->assombracaoRepository = $assombracaoRepository;
    }

    public function execute(): array
    {
        return $this->assombracaoRepository->get();
    }
}
