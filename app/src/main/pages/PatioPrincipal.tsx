import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Destinos } from '../enums/Destinos';

// aqui,m além do que já tem, deve ter os botões pra ir pros lugares. Os botões devem chamar o Caminho, passando o destino como prop
// assim o caminho consegue funcionar e, depois, montar o destino original

export const PatioPrincipal = () => {
    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Você chega no pátio principal, um lugar que, em outro contexto, seria colorido e alegre, mas que aqui, tanto no dia quanto na escuridão da noite, tem um ar fúnebre e triste, como se perdesse a cor. Você consegue ver a lua cheia soltando seu fraco brilho azul, mas que já é o suficiente para dissernir os arredores.',
        'Ao chegar no pátio principal, você sente uma certa paz. Esse lugar, com sua grande fonte ornamentada e com águas cristalinas, refletindo a luz da lua, trazem um ar de sossêgo e calma.',
        'No pátio principal, há diversas flores brancas, vermelhas e amarelas que, durante o dia, fazem par com as que são deixadas em cima dos túmulos. À noite, porém, embelezam o caminho junto da luz prateada que vem do céu, quase como um véu transparente e florido, ao mesmo tempo lindo e fantasmagórico.',
    ];

    return (
        <div>
            <h1>Pátio Principal</h1>
            <BoxTexto descricoes={descricoes} />
            <BotaoNavegacao valor="Igreja" destino={`caminho/${Destinos.Igreja}`} />
            <BotaoNavegacao valor="Necrotério" destino={`caminho/${Destinos.Necroterio}`} />
            <BotaoNavegacao valor="Mausoléus" destino={`caminho/${Destinos.Mausoleus}`} />
        </div>
    );
};
