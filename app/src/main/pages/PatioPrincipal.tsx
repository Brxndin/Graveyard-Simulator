import { useContext } from 'react';
import imagemPatio from '../assets/patio.jpg';
import { BotaoAcao } from '../components/BotaoAcao';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Status } from '../components/Status';
import { Titulo } from '../components/Titulo';
import { JogoContext } from '../contexts/JogoContext';
import { Destinos } from '../enums/destinos';
import { useAtualizarJogador } from '../hooks/useAtualizarJogador';

export const PatioPrincipal = () => {
    const { jogador, setJogador } = useContext(JogoContext);
    const { jogadorAtualizado, atualizarJogador, error } = useAtualizarJogador();

    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Você chega no pátio principal, um lugar que, em outro contexto, seria colorido e alegre, mas que aqui, tanto no dia quanto na escuridão da noite, tem um ar fúnebre e triste, como se perdesse a cor. Você consegue ver a lua cheia soltando seu fraco brilho azul, mas que já é o suficiente para dissernir os arredores.',
        'Ao chegar no pátio principal, você sente uma certa paz. Esse lugar, com sua grande fonte ornamentada e com águas cristalinas, refletindo a luz da lua, trazem um ar de sossêgo e calma.',
        'No pátio principal, há diversas flores brancas, vermelhas e amarelas que, durante o dia, fazem par com as que são deixadas em cima dos túmulos. À noite, porém, embelezam o caminho junto da luz prateada que vem do céu, quase como um véu transparente e florido, ao mesmo tempo lindo e fantasmagórico.',
    ];

    return (
        <div>
            <Titulo texto="Pátio Principal" />
            <Status dinheiro={jogador?.dinheiro} energia={jogador?.energia} energiaMaxima={jogador?.energiaMaxima} />
            <p>{error}</p>
            <BoxTexto descricoes={descricoes} imagem={imagemPatio} />
            <div className="center">
                <BotaoAcao
                    valor="Varrer"
                    acao={() => {
                        if (jogador) {
                            atualizarJogador({
                                jogador: jogador,
                                dinheiro: 100,
                                energia: -10,
                                energiaMaxima: 0,
                            });

                            // verificar isso pois está bugado
                            // não sei se é nesse if ou no hook
                            // na primeira request ele da certo e na segunda falha dizendo que nenhum dado foi alterado
                            if (!error) {
                                setJogador(jogadorAtualizado);
                            }
                        }
                    }}
                />
                <BotaoAcao
                    valor="Descansar"
                    acao={() => {
                        if (jogador) {
                            atualizarJogador({
                                jogador: jogador,
                                dinheiro: 0,
                                energia: 100,
                                energiaMaxima: 0,
                            });

                            if (!error) {
                                setJogador(jogadorAtualizado);
                            }
                        }
                    }}
                />
                <BotaoNavegacao valor="Igreja" destino={`caminho/${Destinos.Igreja}`} />
                <BotaoNavegacao valor="Funerária" destino={`caminho/${Destinos.Funeraria}`} />
                <BotaoNavegacao valor="Mausoléus" destino={`caminho/${Destinos.Mausoleus}`} />
            </div>
        </div>
    );
};
