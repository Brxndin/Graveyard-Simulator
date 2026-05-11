<?php

namespace Server\domain\entities;

use DomainException;

class Mausoleu
{
    private array $props;

    public function __construct(
        string $nome,
        int $lugares,
        int | null $id = null,
        int $lugaresOcupados = 0,
    ) {
        $this->id = $id;
        $this->nome = $nome;
        $this->lugares = $lugares;
        $this->lugaresOcupados = $lugaresOcupados;
    }

    public int | null $id {
        get {
            return $this->props['id'] ?? null;
        }

        set(int | null $value) {
            $this->props['id'] = $value;
        }
    }

    public string $nome {
        get {
            return $this->props['nome'];
        }

        set(string $value) {
            $this->validaNome($value);

            $this->props['nome'] = $value;
        }
    }

    public int $lugares {
        get {
            return $this->props['lugares'];
        }

        set(int $value) {
            $this->validaLugares($value);

            $this->props['lugares'] = $value;
        }
    }

    public int $lugaresOcupados {
        get {
            return $this->props['lugaresOcupados'] ?? 0;
        }

        set(int $value) {
            $this->validaLugaresOcupados($value);

            $this->props['lugaresOcupados'] = $value;
        }
    }

    private function validaNome(string $nome)
    {
        if (mb_strlen($nome) > 200) {
            throw new DomainException('O nome não pode ter mais de 200 caracteres!');
        }
    }

    private function validaLugares(int $lugares)
    {
        if ($lugares <= 0) {
            throw new DomainException('Um mausoléu deve ter no mínimo 1 lugar!');
        }

        if ($lugares > 6) {
            throw new DomainException('Um mausoléu pode ter no máximo 6 lugares!');
        }
    }

    private function validaLugaresOcupados(int $lugaresOcupados)
    {
        if ($lugaresOcupados > $this->lugares) {
            throw new DomainException('Não é possível ocupar mais lugares do que o mausoléu comporta!');
        }
    }
}
