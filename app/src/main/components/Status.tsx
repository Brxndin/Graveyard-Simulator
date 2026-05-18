interface StatusProps {
    dinheiro: number | undefined;
    energia: number | undefined;
    energiaMaxima: number | undefined;
}

export const Status = ({ dinheiro, energia, energiaMaxima }: StatusProps) => {
    return (
        <div className='center status'>
            <p>
                Dinheiro: {dinheiro ?? 0} moedas
                <br/>
                Energia: {energia ?? 0}/{energiaMaxima ?? 0}
            </p>
        </div>
    );
};
