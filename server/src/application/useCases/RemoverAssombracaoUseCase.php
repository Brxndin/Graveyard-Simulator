<?php

namespace Server\application\useCases;

use Server\domain\repositories\AssombracaoRepository;
use DomainException;

class RemoverAssombracaoUseCase
{
    private AssombracaoRepository $repository;

    public function __construct(AssombracaoRepository $repository)
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
