interface ParagrafoProps {
    texto: string;
}

export const Paragrafo = ({ texto }: ParagrafoProps) => {
    return (
        <div className='center'>
            <p className='paragrafo'>{texto}</p>
        </div>
    );
};
