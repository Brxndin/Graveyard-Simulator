import { BotaoNavegacao } from "../components/BotaoNavegacao";
import { BoxTexto } from "../components/BoxTexto";
import { Destinos } from "../enums/Destinos";

export const Incerto = () => {
    const descricoes = [
        'Tenha cuidado! Volte para o caminho de onde veio. Por aqui andam bruxas e cultistas que, ao menor sinal de estranhos, são capazes de coisas terríveis.'
    ];

    return (
        <div>
            <h1>Você se perdeu!</h1>
            <BoxTexto descricoes={descricoes} />
            <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
        </div>
    );
};
