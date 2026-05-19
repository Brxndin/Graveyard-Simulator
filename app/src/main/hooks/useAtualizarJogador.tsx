import { useCallback, useMemo } from 'react';
import { useControllerAdapter } from '../adapters/useControllerAdapter';
import { MakeAtualizarJogadorController } from '../factories/atualizar-jogador-factory';

interface CallbackProps {
    id: number | undefined;
    dinheiro: number;
    energia: number;
    energiaMaxima: number;
}

export const useAtualizarJogador = () => {
    const controller = useMemo(() => MakeAtualizarJogadorController(), []);
    const { data, isLoading, error, execute } = useControllerAdapter(controller);

    const atualizarJogador = useCallback(
        async (props: CallbackProps) => {
            return await execute({
                id: props.id ?? 0,
                dinheiro: props.dinheiro,
                energia: props.energia,
                energiaMaxima: props.energiaMaxima,
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
