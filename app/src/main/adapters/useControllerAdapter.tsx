import { useState, useCallback } from "react";
import type { Controller } from "../../presentation/protocols/controller";

export const useControllerAdapter = <TIn, TOut>(controller: Controller<TIn, TOut>) => {
    const [data, setData] = useState<TOut | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const execute = useCallback(async (request: TIn) => {
        setIsLoading(true);
        setError(null);

        try {
            const result = await controller.handle(request);

            setData(result);
        } catch (error: unknown) {
            console.log(error);

            setError(error?.message ?? 'Ocorreu um erro.');
        } finally {
            setIsLoading(false);
        }
    }, [controller]);

    return { data, isLoading, error, execute };
};
