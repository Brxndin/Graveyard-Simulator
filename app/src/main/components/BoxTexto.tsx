import { useState } from 'react';

interface BoxTextoProps {
    descricoes: string[];
    imagem: string;
}

export const BoxTexto = ({ descricoes, imagem }: BoxTextoProps) => {
    const [numeroAleatorio] = useState(() => Math.random());
    const [texto] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <div className='center'>
                <div className="box-imagem">
                    <img className='imagem-box' src={imagem} alt="Imagem localização" />
                </div>
            </div>
            <div className='center'>
                <div className="box-texto">
                    <p>{texto}</p>
                </div>
            </div>
        </div>
    );
};
