import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { Paragrafo } from '../components/Paragrafo';
import { Titulo } from '../components/Titulo';
import { Destinos } from '../enums/destinos';

export const TelaInicial = () => {
    return (
        <div>
            <Titulo texto="Graveyard Simulator" />
            <Paragrafo texto='Nas noites de luar, com o voar dos morcegos, você deverá caminhar entre os mortos' />
            <div className="container-botoes">
                <div className="box">
                    <BotaoNavegacao valor="Entrar no Cemitério" destino={Destinos.PatioPrincipal} />
                </div>
            </div>
        </div>
    );
};
