import { useCallback, useMemo } from 'react';
import { Jogador } from '../../domain/entities/jogador';
import { useControllerAdapter } from '../adapters/useControllerAdapter';
import { MakeVarrerController } from '../factories/varrer-factory';
import type { JogadorData } from '../contexts/JogoContext';

export const useVarrer = () => {
    const controller = useMemo(() => MakeVarrerController(), []);
    const { data, isLoading, error, execute } = useControllerAdapter(controller);

    const varrer = useCallback(
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
        dadosVarrer: data,
        carregandoVarrer: isLoading,
        erroVarrer: error,
        varrer
    };
};
