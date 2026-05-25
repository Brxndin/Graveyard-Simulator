<?php

namespace Server\application\useCases;

use DomainException;
use Server\domain\repositories\JogadorRepository;

class ResetarUseCase
{
    private JogadorRepository $repository;

    public function __construct(JogadorRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(int $id): array
    {
        $jogador = $this->repository->find($id);

        if ($jogador) {
            $jogador->resetar();
        } else {
            throw new DomainException('Jogador não econtrado!');
        }

        $linhasAlteradas = $this->repository->update($jogador);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi alterado!');
        }

        return [
            'jogador' => $jogador
        ];
    }
}
