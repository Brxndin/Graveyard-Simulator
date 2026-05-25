import { useCallback, useMemo } from 'react';
import { Jogador } from '../../domain/entities/jogador';
import { useControllerAdapter } from '../adapters/useControllerAdapter';
import type { JogadorData } from '../contexts/JogoContext';
import { MakeDescansarController } from '../factories/descansar-factory';

export const useDescansar = () => {
    const controller = useMemo(() => MakeDescansarController(), []);
    const { data, isLoading, error, execute } = useControllerAdapter(controller);

    const descansar = useCallback(
        async (dadosJogador: JogadorData) => {
            const jogador = new Jogador({
                id: dadosJogador?.id ?? undefined,
                dinheiro: dadosJogador.dinheiro,
                energia: dadosJogador.energia,
                energiaMaxima: dadosJogador.energiaMaxima,
                diaAtual: dadosJogador.diaAtual,
                assombrometroAtual: dadosJogador.assombrometroAtual,
            });

            const resultado = await execute({ jogador });

            if (resultado) {
                const novosDadosJogador: JogadorData = {
                    id: resultado.jogadorAtualizado.id,
                    dinheiro: resultado.jogadorAtualizado.dinheiro,
                    energia: resultado.jogadorAtualizado.energia,
                    energiaMaxima: resultado.jogadorAtualizado.energiaMaxima,
                    diaAtual: resultado.jogadorAtualizado.diaAtual,
                    assombrometroAtual: resultado.jogadorAtualizado.assombrometroAtual,
                };

                return {
                    jogadorAtualizado: novosDadosJogador,
                    venceu: resultado.venceu,
                    perdeu: resultado.perdeu,
                    mensagem: resultado.mensagem,
                };
            }

            return null;
        },
        [execute]
    );

    return {
        dadosDescansar: data,
        carregandoDescansar: isLoading,
        erroDescansar: error,
        descansar
    };
};
