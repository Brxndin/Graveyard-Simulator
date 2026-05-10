<?php

namespace Server\infrastructure\repositories;

use Server\domain\entities\Assombracao;
use Server\domain\entities\Mausoleu;
use Server\domain\enums\TipoAssombracaoEnum;
use Server\domain\repositories\AssombracaoRepository;

class MockAssombracaoRepository implements AssombracaoRepository
{
    private array $db;

    public function __construct(string $db)
    {
        $this->db = [
            'assombracoes' => [
                ['id' => 1, 'nome' => 'Vampiro', 'tipo' => TipoAssombracaoEnum::Vampiro, 'mausoleu' => null],
                ['id' => 2, 'nome' => 'Fantasma', 'tipo' => TipoAssombracaoEnum::Fantasma, 'mausoleu' => ['id' => 1, 'nome' => 'Família Addams', 'lugares' => 5]],
                ['id' => 3, 'nome' => 'Esqueleto', 'tipo' => TipoAssombracaoEnum::Esqueleto, 'mausoleu' => null],
                ['id' => 4, 'nome' => 'Zumbi', 'tipo' => TipoAssombracaoEnum::Zumbi, 'mausoleu' => null],
            ],
            'mausoleus' => [
                ['id' => 1, 'nome' => 'Família Addams', 'lugares' => 5],
            ]
        ];
    }

    public function get(): array
    {
        $retorno = [];

        $dados = $this->db['assombracoes'];

        foreach ($dados as $dado) {
            $retorno[] = new Assombracao(
                id: $dado['id'],
                nome: $dado['nome'],
                tipo: $dado['tipo'],
                mausoleu: $dado['mausoleu'],
            );
        }

        return $retorno;
    }

    public function find(int $id): Assombracao | null
    {
        $retorno = null;

        $dados = $this->db['assombracoes'];

        foreach ($dados as $dado) {
            $retorno = new Assombracao(
                id: $dado['id'],
                nome: $dado['nome'],
                tipo: $dado['tipo'],
                mausoleu: $dado['mausoleu'],
            );

            break;
        }

        return $retorno;
    }

    public function insert(Assombracao $assombracao): Assombracao
    {
        $dados = $this->db['assombracoes'];

        $retorno = $assombracao;

        return $retorno;
    }

    public function update(Assombracao $assombracao): int
    {
        return 1;
    }

    public function delete(int $id): int
    {
        return 1;
    }

    public function findMausoleu(int $id): Mausoleu | null
    {
        $retorno = null;

        $dados = $this->db['mausoleus'];

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
}
