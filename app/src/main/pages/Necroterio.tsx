// aqui será onde são cadastradas as assombrações
// lembrar de criar, no backend, nosos tipos de assombração, como demônios, monsto (tipo frankenstein), múmia e pessoa normal (vai ser só um morto comum)
// descrever as macas, o silêncio e também que, em alguns casos, quando o morto não está tão morto, que o personagem escuta conversas
// verificar se é melhor as assombrações serem geradas de forma aleatória e buscadas pelo carro funerário nas funerárias ou se é melhor ter um cadastro em formulário
// se for pelo carro, colocar um timeout de uns 3 minutos pra pessoa não ficar toda hora ali clicando no carro

import { BotaoNavegacao } from "../components/BotaoNavegacao";
import { BoxTexto } from "../components/BoxTexto";
import { Destinos } from "../enums/Destinos";

// se for por formulário, limitar o número de cadastros por tempo também. Além disso, o necrotério deve ter um limite, então a pessoa será obrigada a alocar o povo nos mausoléus
export const Necroterio = () => {
    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Você chega no pátio principal, um lugar que, em outro contexto, seria colorido e alegre, mas que aqui, tanto no dia quanto na escuridão da noite, tem um ar fúnebre e triste, como se perdesse a cor. Você consegue ver a lua cheia soltando seu fraco brilho azul, mas que já é o suficiente para dissernir os arredores.',
        'Ao chegar no pátio principal, você sente uma certa paz. Esse lugar, com sua grande fonte ornamentada e com águas cristalinas, refletindo a luz da lua, trazem um ar de sossêgo e calma.',
        'No pátio principal, há diversas flores brancas, vermelhas e amarelas que, durante o dia, fazem par com as que são deixadas em cima dos túmulos. À noite, porém, embelezam o caminho junto da luz prateada que vem do céu, quase como um véu transparente e florido, ao mesmo tempo lindo e fantasmagórico.',
    ];

    return (
        <div>
            <h1>Necrotério</h1>
            <BoxTexto descricoes={descricoes} />
            <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
        </div>
    );
};
