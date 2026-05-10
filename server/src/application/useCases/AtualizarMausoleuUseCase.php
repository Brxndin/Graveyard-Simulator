<?php

namespace Server\application\useCases;

use DomainException;
use Server\domain\entities\Mausoleu;
use Server\domain\repositories\MausoleuRepository;

class AtualizarMausoleuUseCase
{
    private MausoleuRepository $mausoleuRepository;

    public function __construct(MausoleuRepository $mausoleuRepository)
    {
        $this->mausoleuRepository = $mausoleuRepository;
    }

    public function execute(int $id, array $dados): Mausoleu
    {
        $mausoleu = $this->mausoleuRepository->find($id);

        if ($mausoleu) {
            if (array_key_exists('nome', $dados)) {
                $mausoleu->nome = $dados['nome'];
            }

            if (array_key_exists('lugares', $dados)) {
                $mausoleu->lugares = $dados['lugares'];
            }
        } else {
            throw new DomainException('Mausoléu não econtrado!');
        }

        $linhasAlteradas = $this->mausoleuRepository->update($mausoleu);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi alterado!');
        }

        return $mausoleu;
    }
}
