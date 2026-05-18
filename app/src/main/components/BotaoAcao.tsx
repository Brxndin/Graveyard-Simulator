interface BotaoAcaoProps {
    valor: string;
    acao: CallableFunction;
}

export const BotaoAcao = ({ valor, acao }: BotaoAcaoProps) => {
    return <button className='botao-acao' onClick={() => acao()}>{valor}</button>;
};
