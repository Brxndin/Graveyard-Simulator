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

            return result;
        } catch (error) {
            console.log(error);

            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Ocorreu um erro.');
            }

            return null;
        } finally {
            setIsLoading(false);
        }
    }, [controller]);

    return { data, isLoading, error, execute };
};
