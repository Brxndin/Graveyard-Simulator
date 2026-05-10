<?php

namespace Server\application\useCases;

use Server\domain\entities\Assombracao;
use Server\domain\repositories\AssombracaoRepository;

class BuscarAssombracaoUseCase
{
    private AssombracaoRepository $assombracaoRepository;

    public function __construct(AssombracaoRepository $assombracaoRepository)
    {
        $this->assombracaoRepository = $assombracaoRepository;
    }

    public function execute(int $id): Assombracao | null
    {
        return $this->assombracaoRepository->find($id);
    }
}
