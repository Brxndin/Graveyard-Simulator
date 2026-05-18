<?php

namespace Server\application\useCases;

use Server\domain\entities\Jogador;
use Server\domain\repositories\JogadorRepository;

class BuscarJogadorUseCase
{
    private JogadorRepository $repository;

    public function __construct(JogadorRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(int $id): Jogador | null
    {
        return $this->repository->find($id);
    }
}
