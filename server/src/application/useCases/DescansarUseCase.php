<?php

namespace Server\application\useCases;

use DomainException;
use Server\domain\repositories\JogadorRepository;

class DescansarUseCase
{
    private JogadorRepository $repository;

    public function __construct(JogadorRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(int $id, int $medoCausado): array
    {
        $jogador = $this->repository->find($id);
        $mensagem = '';

        if ($jogador) {
            $mensagem = $jogador->descansar($medoCausado);
        } else {
            throw new DomainException('Jogador não econtrado!');
        }

        $linhasAlteradas = $this->repository->update($jogador);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi alterado!');
        }

        return [
            'jogador' => $jogador,
            'mensagem' => $mensagem
        ];
    }
}
