import { useCallback, useMemo } from 'react';
import { Jogador } from '../../domain/entities/jogador';
import { useControllerAdapter } from '../adapters/useControllerAdapter';
import type { JogadorData } from '../contexts/JogoContext';
import { MakeAcenderVelasController } from '../factories/acender-velas-factory';

export const useAcenderVelas = () => {
    const controller = useMemo(() => MakeAcenderVelasController(), []);
    const { data, isLoading, error, execute } = useControllerAdapter(controller);

    const acenderVelas = useCallback(
        async (dados: JogadorData) => {
            const jogador = new Jogador({
                id: dados?.id ?? undefined,
                dinheiro: dados.dinheiro,
                energia: dados.energia,
                energiaMaxima: dados.energiaMaxima,
                diaAtual: dados.diaAtual,
                assombrometroAtual: dados.assombrometroAtual,
            });

            const resultado = await execute({ jogador });

            if (resultado) {
                const dadosJogador: JogadorData = {
                    id: resultado.jogadorAtualizado.id,
                    dinheiro: resultado.jogadorAtualizado.dinheiro,
                    energia: resultado.jogadorAtualizado.energia,
                    energiaMaxima: resultado.jogadorAtualizado.energiaMaxima,
                    diaAtual: resultado.jogadorAtualizado.diaAtual,
                    assombrometroAtual: resultado.jogadorAtualizado.assombrometroAtual,
                };
    
                // é preciso colocar num objeto comum pois o useState não atualiza se passar a classe direto
                return {
                    jogadorAtualizado: dadosJogador,
                    mensagem: resultado.mensagem
                };
            }

            return null;
        },
        [execute]
    );

    return {
        dadosAcenderVelas: data,
        carregandoAcenderVelas: isLoading,
        erroAcenderVelas: error,
        acenderVelas
    };
};
