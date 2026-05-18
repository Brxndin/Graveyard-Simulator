import { useCallback, useMemo } from 'react';
import type { Jogador } from '../../domain/entities/jogador';
import { useControllerAdapter } from '../adapters/useControllerAdapter';
import { MakeAtualizarJogadorController } from '../factories/atualizar-jogador-factory';

interface CallbackProps {
    jogador: Jogador;
    dinheiro: number;
    energia: number;
    energiaMaxima: number;
}

export const useAtualizarJogador = () => {
    const controller = useMemo(() => MakeAtualizarJogadorController(), []);

    const { data, isLoading, error, execute } = useControllerAdapter(controller);

    const atualizarJogador = useCallback(
        async (props: CallbackProps) => {
            await execute({
                id: props.jogador.id ?? 0,
                dinheiro: props.jogador.dinheiro + props.dinheiro,
                energia: props.jogador.energia + props.energia,
                energiaMaxima: props.jogador.energiaMaxima + props.energiaMaxima,
            });
        },
        [execute]
    );

    return {
        jogadorAtualizado: data,
        isLoading,
        error,
        atualizarJogador,
    };
};
