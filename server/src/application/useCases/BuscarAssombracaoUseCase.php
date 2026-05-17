<?php

namespace Server\application\useCases;

use Server\domain\entities\Assombracao;
use Server\domain\repositories\AssombracaoRepository;

class BuscarAssombracaoUseCase
{
    private AssombracaoRepository $repository;

    public function __construct(AssombracaoRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(int $id): Assombracao | null
    {
        return $this->repository->find($id);
    }
}
