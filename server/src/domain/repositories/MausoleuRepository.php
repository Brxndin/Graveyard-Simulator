<?php

namespace Server\domain\repositories;

use Server\domain\entities\Mausoleu;

interface MausoleuRepository
{
    public function get(): array;
    public function find(int $id): Mausoleu | null;
    public function insert(Mausoleu $mausoleu): Mausoleu;
    public function update(Mausoleu $mausoleu): int;
    public function delete(int $id): int;
}
