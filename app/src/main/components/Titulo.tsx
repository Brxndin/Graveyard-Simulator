interface TituloProps {
    texto: string;
}

export const Titulo = ({ texto }: TituloProps) => {
    return (
        <div className='center'>
            <h1 className='titulo'>{texto}</h1>
        </div>
    );
};
