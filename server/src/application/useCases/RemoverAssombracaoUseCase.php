<?php

namespace Server\application\useCases;

use Server\domain\repositories\AssombracaoRepository;
use DomainException;

class RemoverAssombracaoUseCase
{
    private AssombracaoRepository $assombracaoRepository;

    public function __construct(AssombracaoRepository $assombracaoRepository)
    {
        $this->assombracaoRepository = $assombracaoRepository;
    }

    public function execute(int $id): void
    {
        $linhasAlteradas = $this->assombracaoRepository->delete($id);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi removido!');
        }
    }
}
