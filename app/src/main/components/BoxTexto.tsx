import { useState } from 'react';

interface BoxTextoProps {
    descricoes: string[];
}

export const BoxTexto = ({ descricoes }: BoxTextoProps) => {
    const [numeroAleatorio] = useState(() => Math.random());
    const [texto] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <div id="box-texto">
                <p>{texto}</p>
            </div>
        </div>
    );
};
