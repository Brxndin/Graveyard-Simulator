interface StatusProps {
    dinheiro: number | undefined;
    energia: number | undefined;
    energiaMaxima: number | undefined;
    dia: number | undefined;
    assombrometro: number | undefined
}

export const Status = ({ dinheiro, energia, energiaMaxima, dia, assombrometro }: StatusProps) => {
    return (
        <div className='status-container'>
            <p>
                Dia: <span>{dia ?? 0}</span>
                <br/>
                Dinheiro: <span>{dinheiro ?? 0} moedas</span>
                <br/>
                Energia: <span>{energia ?? 0}/{energiaMaxima ?? 0}</span>
                <br/>
                Assombrômetro: <progress className='assombrometro' value={assombrometro ?? 0} max={100}>Assombrômetro</progress>
            </p>
        </div>
    );
};
