interface BoxTextoProps {
    descricao: string;
    imagem: string;
}

export const BoxTexto = ({ descricao, imagem }: BoxTextoProps) => {
    return (
        <div>
            <div className='center'>
                <div className="box-imagem">
                    <img className='imagem-central' src={imagem} alt="Imagem localização" />
                </div>
            </div>
            <div className='center'>
                <div className="box-texto">
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    );
};
