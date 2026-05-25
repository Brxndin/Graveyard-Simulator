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
        int $diaAtual,
        int $assombrometroAtual,
        int | null $id = null,
    ) {
        $this->id = $id;
        $this->energiaMaxima = $energiaMaxima;
        $this->energia = $energia;
        $this->dinheiro = $dinheiro;
        $this->diaAtual = $diaAtual;
        $this->assombrometroAtual = $assombrometroAtual;
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
            return $this->props['energia'] ?? 0;
        }

        set(int $value) {
            $this->validaEnergia($value);

            $this->props['energia'] = $value;
        }
    }

    public int $energiaMaxima {
        get {
            return $this->props['energiaMaxima'] ?? 0;
        }

        set(int $value) {
            $this->validaEnergiaMaxima($value);

            $this->props['energiaMaxima'] = $value;
        }
    }

    public int $dinheiro {
        get {
            return $this->props['dinheiro'] ?? 0;
        }

        set(int $value) {
            $this->validaDinheiro($value);

            $this->props['dinheiro'] = $value;
        }
    }

    public int $diaAtual {
        get {
            return $this->props['diaAtual'] ?? 0;
        }

        set(int $value) {
            $this->props['diaAtual'] = $value;
        }
    }

    public int $assombrometroAtual {
        get {
            return $this->props['assombrometroAtual'] ?? 0;
        }

        set(int $value) {
            $this->validaAssombrometro($value);

            $this->props['assombrometroAtual'] = $value;
        }
    }

    private function validaEnergia(int $energia)
    {
        if ($energia < 0) {
            throw new DomainException('A energia não pode ser menor do que 0!');
        }

        if ($energia > $this->energiaMaxima) {
            throw new DomainException('A energia não pode ser maior do que a energia máxima!');
        }
    }

    private function validaEnergiaMaxima(int $energiaMaxima)
    {
        if ($energiaMaxima < 0) {
            throw new DomainException('A energia máxima não pode ser menor do que 0!');
        }

        if ($energiaMaxima < $this->energia) {
            throw new DomainException('A energia máxima não pode ser menor do que a energia atual!');
        }
    }

    private function validaDinheiro(int $dinheiro)
    {
        if ($dinheiro < 0) {
            throw new DomainException('O dinheiro não pode ser menor do que 0!');
        }
    }

    private function validaAssombrometro(int $validaAssombrometro)
    {
        if ($validaAssombrometro > 100) {
            throw new DomainException('O assombrômetro pode chegar, no máximo, até 100!');
        }
    }

    public function varrer(): string {
        if ($this->energia < 10) {
            return 'Você tenta, mas está muito cansado para fazer qualquer coisa.';
        }

        $this->energia -= 10;
        $this->dinheiro += 100;

        return 'Você varre as folhas secas do pátio, que inevitavelmente ficará sujo novamente com a força do tempo e do vento.';
    }

    public function acenderVelas(): string {
        if ($this->energia < 5) {
            return 'Você tenta, mas está muito cansado para fazer qualquer coisa.';
        }

        $this->energia -= 5;
        $this->dinheiro += 50;

        return 'Você acende as velas e fica olhando elas dançarem, criando diversas sombras nos arredores que parecem vivas.';
    }

    public function exorcizar(): string {
        if ($this->energia < 80) {
            return 'Você tenta, mas está muito cansado para fazer qualquer coisa.';
        }

        $this->energia -= 80;
        $this->dinheiro += 300;

        return 'Você começa a ajudar o padre no exorcismo. Apesar de muito assustado, você segue o que lhe é dito e, no meio das vozes graves e gritos de agonia, o exorcismo é finalizado com sucesso.';
    }

    public function descansar(int $medoCausado): string
    {
        $this->energia = $this->energiaMaxima;
        $this->diaAtual += 1;
        $this->assombrometroAtual += $medoCausado;

        return 'Você descansa e se prepara para mais uma longa noite em meio aos espíritos.';
    }

    public function resetar(): void
    {
        $this->dinheiro = 0;
        $this->energiaMaxima = 200;
        $this->energia = $this->energiaMaxima;
        $this->diaAtual = 1;
        $this->assombrometroAtual = 0;
    }

    public function isGameOver(): bool {
        return $this->assombrometroAtual >= 100;
    }

    public function isVencedor(): bool {
        return $this->diaAtual >= 20;
    }
}
