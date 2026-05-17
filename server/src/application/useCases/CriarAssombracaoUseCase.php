<?php

namespace Server\application\useCases;

use Server\domain\entities\Assombracao;
use Server\domain\entities\Mausoleu;
use Server\domain\enums\TipoAssombracaoEnum;
use Server\domain\repositories\AssombracaoRepository;

class CriarAssombracaoUseCase
{
    private AssombracaoRepository $repository;

    public function __construct(AssombracaoRepository $repository)
    {
        $this->repository = $repository;
    }

    public function execute(array $dados): Assombracao
    {
        $mausoleu = null;

        if (!empty($dados['mausoleu'])) {
            $mausoleu = new Mausoleu(
                nome: $dados['mausoleu']['nome'] ?? null,
                lugares: $dados['mausoleu']['lugares'] ?? 0,
            );
        }

        $assombracao = new Assombracao(
            nome: $dados['nome'] ?? null,
            tipo: TipoAssombracaoEnum::from($dados['tipo'] ?? null),
            mausoleu: $mausoleu,
        );

        return $this->repository->insert($assombracao);
    }
}
