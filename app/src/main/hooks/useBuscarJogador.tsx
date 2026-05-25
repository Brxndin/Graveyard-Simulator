import { useCallback, useMemo } from 'react';
import { useControllerAdapter } from '../adapters/useControllerAdapter';
import type { JogadorData } from '../contexts/JogoContext';
import { MakeBuscarJogadorController } from '../factories/buscar-jogador-factory';

export const useBuscarJogador = () => {
    const controller = useMemo(() => MakeBuscarJogadorController(), []);

    const { data, isLoading, error, execute } = useControllerAdapter(controller);

    const buscarJogador = useCallback(
        async (id: number) => {
            const resultado = await execute({ id });

            if (resultado) {
                const jogador: JogadorData = {
                    id: resultado.jogador.id,
                    dinheiro: resultado.jogador.dinheiro,
                    energia: resultado.jogador.energia,
                    energiaMaxima: resultado.jogador.energiaMaxima,
                    diaAtual: resultado.jogador.diaAtual,
                    assombrometroAtual: resultado.jogador.assombrometroAtual,
                };

                return {
                    jogador: jogador,
                };
            }

            return null;
        },
        [execute]
    );

    return {
        jogador: data,
        isLoading,
        error,
        buscarJogador,
    };
};
