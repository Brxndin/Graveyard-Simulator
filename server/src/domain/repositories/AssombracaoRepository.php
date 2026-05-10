<?php

namespace Server\domain\repositories;

use Server\domain\entities\Assombracao;
use Server\domain\entities\Mausoleu;

interface AssombracaoRepository
{
    public function get(): array;
    public function find(int $id): Assombracao | null;
    public function insert(Assombracao $assombracao): Assombracao;
    public function update(Assombracao $assombracao): int;
    public function delete(int $id): int;
    public function findMausoleu(int $id): Mausoleu | null;
}
