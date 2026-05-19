// aqui vai ser onde tem a ação de fazer exorcismos
// com os exorcismos, conseguimos alocar demônios nos mausoléus (semelhante ao que é feito no necrotério com os corpos)
// isso deve dar um pouco de dinheiro também
// na descrição, falar sobre vitrais, som de órgão, sinos etc

import { useState } from 'react';
import imagemIgreja from '../assets/images/igreja.png';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Titulo } from '../components/Titulo';
import { Destinos } from '../enums/destinos';

export const Igreja = () => {
   // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Você chega no pátio principal, um lugar que, em outro contexto, seria colorido e alegre, mas que aqui, tanto no dia quanto na escuridão da noite, tem um ar fúnebre e triste, como se perdesse a cor. Você consegue ver a lua cheia soltando seu fraco brilho azul, mas que já é o suficiente para dissernir os arredores.',
        'Ao chegar no pátio principal, você sente uma certa paz. Esse lugar, com sua grande fonte ornamentada e com águas cristalinas, refletindo a luz da lua, trazem um ar de sossêgo e calma.',
        'No pátio principal, há diversas flores brancas, vermelhas e amarelas que, durante o dia, fazem par com as que são deixadas em cima dos túmulos. À noite, porém, embelezam o caminho junto da luz prateada que vem do céu, quase como um véu transparente e florido, ao mesmo tempo lindo e fantasmagórico.',
    ];

    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <Titulo texto='Igreja'/>
            <BoxTexto descricao={descricao} imagem={imagemIgreja} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
                </div>
            </div>
        </div>
    );
};
