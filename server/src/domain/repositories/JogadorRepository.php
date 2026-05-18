<?php

namespace Server\domain\repositories;

use Server\domain\entities\Jogador;

interface JogadorRepository
{
    public function find(int $id): Jogador | null;
    public function update(Jogador $jogador): int;
}
