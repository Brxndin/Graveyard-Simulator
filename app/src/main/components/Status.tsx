interface StatusProps {
    dinheiro: number | undefined;
    energia: number | undefined;
    energiaMaxima: number | undefined;
}

export const Status = ({ dinheiro, energia, energiaMaxima }: StatusProps) => {
    return (
        <div className='status-container'>
            <p>
                Dinheiro: <span>{dinheiro ?? 0} moedas</span>
                <br/>
                Energia: <span>{energia ?? 0}/{energiaMaxima ?? 0}</span>
            </p>
        </div>
    );
};
