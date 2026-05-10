<?php

namespace Server\application\useCases;

use Server\domain\entities\Assombracao;
use Server\domain\repositories\AssombracaoRepository;
use DomainException;
use Server\domain\enums\TipoAssombracaoEnum;

class AtualizarAssombracaoUseCase
{
    private AssombracaoRepository $assombracaoRepository;

    public function __construct(AssombracaoRepository $assombracaoRepository)
    {
        $this->assombracaoRepository = $assombracaoRepository;
    }

    public function execute(int $id, array $dados): Assombracao
    {
        $assombracao = $this->assombracaoRepository->find($id);

        if ($assombracao) {
            if (array_key_exists('nome', $dados)) {
                $assombracao->nome = $dados['nome'];
            }

            if (array_key_exists('tipo', $dados)) {
                $assombracao->tipo = TipoAssombracaoEnum::from($dados['tipo'] ?? null);
            }
            
            if (array_key_exists('mausoleu', $dados)) {
                $mausoleu = null;

                // aqui só pode ocorrer a troca de mausoléu
                if (!empty($dados['mausoleu']['id'])) {
                    $mausoleu = $this->assombracaoRepository->findMausoleu($dados['mausoleu']['id']);
                }

                $assombracao->mausoleu = $mausoleu;
            }
        } else {
            throw new DomainException('Erro ao buscar a assombração!');
        }

        $linhasAlteradas = $this->assombracaoRepository->update($assombracao);

        if ($linhasAlteradas <= 0) {
            throw new DomainException('Nenhum dado foi alterado!');
        }

        return $assombracao;
    }
}
