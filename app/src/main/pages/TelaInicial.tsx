import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { Destinos } from '../enums/Destinos';

export const TelaInicial = () => {
    return (
        <div>
            <h1>Graveyard Simulator</h1>
            <p>Nas noites de luar, com o voar dos morcegos, você deverá caminhar entre os mortos.</p>
            <BotaoNavegacao valor='Entrar no Cemitério' destino={Destinos.PatioPrincipal}/>
        </div>
    );
};
