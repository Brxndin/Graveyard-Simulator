// aqui vai ter os mausoléus com as opções de criar um novo e uma lista dos mausoléus já criados (fazer em formato de cards)
// os mausoléus terão opção de ver quem está alocado, fazer upgrade de lugares (até 6) e recolher o dinheiro dos moradores (que, em sua maioria, serão mortos vivos)
// descrever as estátuas de anjos ou de pessoas que têm nos mausoléus
// verificar se faz sentido ter gárgulas ou estátuas de esqueletos também que representam a morte

import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Destinos } from '../enums/Destinos';

export const Mausoleus = () => {
    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Você chega no pátio principal, um lugar que, em outro contexto, seria colorido e alegre, mas que aqui, tanto no dia quanto na escuridão da noite, tem um ar fúnebre e triste, como se perdesse a cor. Você consegue ver a lua cheia soltando seu fraco brilho azul, mas que já é o suficiente para dissernir os arredores.',
        'Ao chegar no pátio principal, você sente uma certa paz. Esse lugar, com sua grande fonte ornamentada e com águas cristalinas, refletindo a luz da lua, trazem um ar de sossêgo e calma.',
        'No pátio principal, há diversas flores brancas, vermelhas e amarelas que, durante o dia, fazem par com as que são deixadas em cima dos túmulos. À noite, porém, embelezam o caminho junto da luz prateada que vem do céu, quase como um véu transparente e florido, ao mesmo tempo lindo e fantasmagórico.',
    ];

    return (
        <div>
            <h1>Mausoléus</h1>
            <BoxTexto descricoes={descricoes} />
            <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
        </div>
    );
};
