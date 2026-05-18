export interface Controller<TIn, TOut> {
    handle(request: TIn): Promise<TOut>;
}
