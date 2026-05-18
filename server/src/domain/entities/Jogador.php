<?php

namespace Server\domain\entities;

use DomainException;

class Jogador
{
    private array $props;

    public function __construct(
        int $energia,
        int $dinheiro,
        int $energiaMaxima,
        int | null $id = null,
    ) {
        $this->id = $id;
        $this->energiaMaxima = $energiaMaxima;
        $this->energia = $energia;
        $this->dinheiro = $dinheiro;
    }

    public int | null $id {
        get {
            return $this->props['id'] ?? null;
        }

        set(int | null $value) {
            $this->props['id'] = $value;
        }
    }

    public int $energia {
        get {
            return $this->props['energia'];
        }

        set(int $value) {
            $this->validaEnergia($value);

            $this->props['energia'] = $value;
        }
    }

    public int $energiaMaxima {
        get {
            return $this->props['energiaMaxima'];
        }

        set(int $value) {
            $this->validaEnergiaMaxima($value);

            $this->props['energiaMaxima'] = $value;
        }
    }

    public int $dinheiro {
        get {
            return $this->props['dinheiro'];
        }

        set(int $value) {
            $this->validaDinheiro($value);

            $this->props['dinheiro'] = $value;
        }
    }

    private function validaEnergia(int $energia)
    {
        if ($energia < 0) {
            throw new DomainException('A energia não pode ser menor do que 0!');
        }

        if ($energia > ($this->energiaMaxima ?? 0)) {
            throw new DomainException('A energia não pode ser maior do que a energia máxima!');
        }
    }

    private function validaEnergiaMaxima(int $energiaMaxima)
    {
        if ($energiaMaxima < 0) {
            throw new DomainException('A energia máxima não pode ser menor do que 0!');
        }

        if ($energiaMaxima < ($this->energia ?? 0)) {
            throw new DomainException('A energia máxima não pode ser menor do que a energia atual!');
        }
    }

    private function validaDinheiro(int $dinheiro)
    {
        if ($dinheiro < 0) {
            throw new DomainException('O dinheiro não pode ser menor do que 0!');
        }
    }
}
