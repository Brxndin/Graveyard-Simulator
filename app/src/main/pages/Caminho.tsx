import { useState } from 'react';
import { useParams } from 'react-router-dom';
import imagemCaminho from '../assets/images/caminho.png';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Titulo } from '../components/Titulo';

export const Caminho = () => {
    const { destino } = useParams();
    
    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = ['Você passa por uma estrada escura, vendo os galhos das árvores em forma de sombra no chão, criados pela luz da Lua.'];

    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    // talvez, se der tempo, da pra colocar eventos aleatórios nesse lugar

    return (
        <div>
            <Titulo texto='Durante a sua caminhada...'/>
            <BoxTexto descricao={descricao} imagem={imagemCaminho} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoNavegacao valor="Continuar" destino={destino ?? 'perdido'} />
                </div>
            </div>
        </div>
    );
};
