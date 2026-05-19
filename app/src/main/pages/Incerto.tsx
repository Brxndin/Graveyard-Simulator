import { useState } from 'react';
import imagemIncerto from '../assets/images/incerto.png';
import { BotaoNavegacao } from "../components/BotaoNavegacao";
import { BoxTexto } from "../components/BoxTexto";
import { Titulo } from "../components/Titulo";
import { Destinos } from "../enums/destinos";

export const Incerto = () => {
    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Tenha cuidado! Volte para o caminho de onde veio. Por aqui andam bruxas e cultistas que, ao menor sinal de estranhos, são capazes de coisas terríveis.'
    ];

    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <Titulo texto='Você se perdeu!'/>
            <BoxTexto descricao={descricao} imagem={imagemIncerto} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
                </div>
            </div>
        </div>
    );
};
