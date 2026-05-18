import { useParams } from 'react-router-dom';
import imagemCaminho from '../assets/caminho.png';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Titulo } from '../components/Titulo';

export const Caminho = () => {
    const { destino } = useParams();

    const descricoes = ['Você passa por uma estrada escura, vendo os galhos das árvores em forma de sombra no chão, criados pela luz da Lua.'];

    // talvez, se der tempo, da pra colocar eventos aleatórios nesse lugar

    return (
        <div>
            <Titulo texto='Durante a sua caminhada...'/>
            <BoxTexto descricoes={descricoes} imagem={imagemCaminho} />
            <div className='center'>
                <BotaoNavegacao valor="Continuar" destino={destino ?? 'perdido'} />
            </div>
        </div>
    );
};
