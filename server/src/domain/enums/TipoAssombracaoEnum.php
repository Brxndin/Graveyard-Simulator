<?php

namespace Server\domain\enums;

enum TipoAssombracaoEnum: int
{
    case Vampiro = 1;
    case Fantasma = 2;
    case Esqueleto = 3;
    case Zumbi = 4;
    case Demonio = 5;

    public function descricao(): string
    {
        return match ($this) {
            self::Vampiro => 'Vampiro',
            self::Fantasma => 'Fantasma',
            self::Esqueleto => 'Esqueleto',
            self::Zumbi => 'Zumbi',
            self::Demonio => 'Demônio',
        };
    }
}
