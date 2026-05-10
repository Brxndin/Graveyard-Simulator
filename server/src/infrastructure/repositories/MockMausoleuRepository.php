<?php

namespace Server\infrastructure\repositories;

use Server\domain\entities\Mausoleu;
use Server\domain\repositories\MausoleuRepository;

class MockMausoleuRepository implements MausoleuRepository
{
    private array $db;

    public function __construct(string $db)
    {
        $this->db = [
            ['id' => 1, 'nome' => 'Família Adamms', 'lugares' => 4],
            ['id' => 2, 'nome' => 'Família Rosa', 'lugares' => 1],
            ['id' => 3, 'nome' => 'Família Delgado', 'lugares' => 2],
            ['id' => 4, 'nome' => 'Indigentes', 'lugares' => 5],
        ];
    }

    public function get(): array
    {
        $retorno = [];

        $dados = $this->db;

        foreach ($dados as $dado) {
            $retorno[] = new Mausoleu(
                id: $dado['id'],
                nome: $dado['nome'],
                lugares: $dado['lugares'],
            );
        }

        return $retorno;
    }

    public function find(int $id): Mausoleu | null
    {
        $retorno = null;

        $dados = $this->db;

        foreach ($dados as $dado) {
            $retorno = new Mausoleu(
                id: $dado['id'],
                nome: $dado['nome'],
                lugares: $dado['lugares'],
            );

            break;
        }

        return $retorno;
    }

    public function insert(Mausoleu $mausoleu): Mausoleu
    {
        $dados = $this->db;

        $retorno = $mausoleu;

        return $retorno;
    }

    public function update(Mausoleu $mausoleu): int
    {
        return 1;
    }

    public function delete(int $id): int
    {
        return 1;
    }
}
