import imagemIncerto from '../assets/incerto.jpg';
import { BotaoNavegacao } from "../components/BotaoNavegacao";
import { BoxTexto } from "../components/BoxTexto";
import { Titulo } from "../components/Titulo";
import { Destinos } from "../enums/destinos";

export const Incerto = () => {
    const descricoes = [
        'Tenha cuidado! Volte para o caminho de onde veio. Por aqui andam bruxas e cultistas que, ao menor sinal de estranhos, são capazes de coisas terríveis.'
    ];

    return (
        <div>
            <Titulo texto='Você se perdeu!'/>
            <BoxTexto descricoes={descricoes} imagem={imagemIncerto} />
            <div className="center">
                <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
            </div>
        </div>
    );
};
