// aqui será onde são cadastradas as assombrações
// lembrar de criar, no backend, nosos tipos de assombração, como demônios, monsto (tipo frankenstein), múmia e pessoa normal (vai ser só um morto comum)
// descrever as macas, o silêncio e também que, em alguns casos, quando o morto não está tão morto, que o personagem escuta conversas
// verificar se é melhor as assombrações serem geradas de forma aleatória e buscadas pelo carro funerário nas funerárias ou se é melhor ter um cadastro em formulário
// se for pelo carro, colocar um timeout de uns 3 minutos pra pessoa não ficar toda hora ali clicando no carro

import { useState } from "react";
import imagemFuneraria from '../assets/images/funeraria.png';
import { BotaoNavegacao } from "../components/BotaoNavegacao";
import { BoxTexto } from "../components/BoxTexto";
import { Titulo } from "../components/Titulo";
import { Destinos } from "../enums/destinos";

// se for por formulário, limitar o número de cadastros por tempo também. Além disso, o necrotério deve ter um limite, então a pessoa será obrigada a alocar o povo nos mausoléus
export const Funeraria = () => {
    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Ao chegar na funerária, você sente um ar mais pesado e um silêncio ensurdecedor que, apesar de revelar sua solidão, te deixa apavorado.',
        'Na funerária, o sentimento de solidão é um paradoxo, pois, ao mesmo tempo que você está sozinho, há muitas pessoas ao seu redor.',
        'Enquanto você está na funerária, a quietude e as coroas de flores passam uma sensação de paz, mas só de lembrar que há pessoas nos caixões você se sente observado.',
    ];

    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <Titulo texto='Funerária'/>
            <BoxTexto descricao={descricao} imagem={imagemFuneraria} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
                </div>
            </div>
        </div>
    );
};
