<?php

namespace Server\application\useCases;

use DomainException;
use Server\domain\entities\Jogador;
use Server\domain\repositories\JogadorRepository;

class AtualizarJogadorUseCase
{
    private JogadorRepository $repository;

    public function __construct(JogadorRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(int $id, array $dados): Jogador
    {
        $jogador = $this->repository->find($id);

        if ($jogador) {
            if (array_key_exists('dinheiro', $dados)) {
                $jogador->dinheiro = $dados['dinheiro'];
            }

            if (array_key_exists('energia', $dados)) {
                $jogador->energia = $dados['energia'];
            }

            if (array_key_exists('energiaMaxima', $dados)) {
                $jogador->energiaMaxima = $dados['energiaMaxima'];
            }
        } else {
            throw new DomainException('Jogador não econtrado!');
        }

        $linhasAlteradas = $this->repository->update($jogador);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi alterado!');
        }

        return $jogador;
    }
}
