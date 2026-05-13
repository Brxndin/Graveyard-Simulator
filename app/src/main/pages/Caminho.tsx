import { useParams } from 'react-router-dom';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';

export const Caminho = () => {
    const { destino } = useParams();

    const descricoes = ['Você passa por uma estrada escura, vendo os galhos das árvores em forma de sombra no chão, criados pela luz da Lua.'];

    // talvez, se der tempo, da pra colocar eventos aleatórios nesse lugar

    return (
        <div>
            <h1>Durante a sua caminhada...</h1>
            <BoxTexto descricoes={descricoes} />
            <BotaoNavegacao valor="Continuar" destino={destino ?? 'perdido'} />
        </div>
    );
};
