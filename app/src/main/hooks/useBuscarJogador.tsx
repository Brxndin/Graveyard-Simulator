import { useMemo, useCallback } from 'react';
import { useControllerAdapter } from '../adapters/useControllerAdapter';
import { MakeBuscarJogadorController } from '../factories/buscar-jogador-factory';

export const useBuscarJogador = () => {
    const controller = useMemo(() => MakeBuscarJogadorController(), []);

    const { data, isLoading, error, execute } = useControllerAdapter(controller);

    const buscarJogador = useCallback(
        async (id: number) => {
            return await execute(id);
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
