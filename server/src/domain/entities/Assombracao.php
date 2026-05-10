<?php

namespace Server\domain\entities;

use DomainException;
use Server\domain\enums\TipoAssombracaoEnum;

class Assombracao
{
    private array $props;

    public function __construct(
        string $nome,
        TipoAssombracaoEnum $tipo,
        int | null $id = null,
        Mausoleu | null $mausoleu = null,
    ) {
        $this->id = $id;
        $this->nome = $nome;
        $this->tipo = $tipo;
        $this->mausoleu = $mausoleu;
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

    public TipoAssombracaoEnum $tipo {
        get {
            return $this->props['tipo'];
        }

        set {
            $this->props['tipo'] = $value;
        }
    }

    public Mausoleu | null $mausoleu {
        get {
            return $this->props['mausoleu'] ?? null;
        }

        set {
            $this->props['mausoleu'] = $value;
        }
    }

    private function validaNome(string $nome)
    {
        if (mb_strlen($nome) > 200) {
            throw new DomainException('O nome não pode ter mais de 200 caracteres!');
        }
    }
}
