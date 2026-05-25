import { useContext, useState } from 'react';
import imagemPatio from '../assets/images/patio.png';
import { BotaoAcao } from '../components/BotaoAcao';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Titulo } from '../components/Titulo';
import { JogoContext } from '../contexts/JogoContext';
import { Destinos } from '../enums/destinos';
import { useNavigate } from 'react-router-dom';
import { Finais } from '../enums/finais';
import { useDescansar } from '../hooks/useDescansar';
import { useVarrer } from '../hooks/useVarrer';

const descricoes = [
    'Você chega no pátio principal, um lugar que, em outro contexto, seria colorido e alegre, mas que aqui, tanto no dia quanto na escuridão da noite, tem um ar fúnebre e triste, como se perdesse a cor. Você consegue ver a lua cheia soltando seu fraco brilho azul, mas que já é o suficiente para dissernir os arredores.',
    'Ao chegar no pátio principal, você sente uma certa paz. Esse lugar, com sua grande fonte ornamentada e com águas cristalinas, refletindo a luz da lua, trazem um ar de sossêgo e calma.',
    'No pátio principal, há diversas flores brancas, vermelhas e amarelas que, durante o dia, fazem par com as que são deixadas em cima dos túmulos. À noite, porém, embelezam o caminho junto da luz prateada que vem do céu, quase como um véu transparente e florido, ao mesmo tempo lindo e fantasmagórico.',
];

export const PatioPrincipal = () => {
    const navigate = useNavigate();
    const { jogador, setJogador } = useContext(JogoContext);
    const { descansar } = useDescansar();
    const { varrer } = useVarrer();

    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao, setDescricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <Titulo texto="Pátio Principal" />
            <BoxTexto descricao={descricao} imagem={imagemPatio} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoAcao
                        valor="Varrer"
                        acao={async () => {
                            if (jogador) {
                                const resultado = await varrer(jogador);

                                if (resultado) {
                                    setJogador(resultado.jogadorAtualizado);

                                    setDescricao(resultado.mensagem);
                                }
                            }
                        }}
                    />
                    <BotaoAcao
                        valor="Descansar"
                        acao={async () => {
                            if (jogador) {
                                const resultado = await descansar(jogador);

                                if (resultado) {
                                    if (resultado.perdeu) {
                                        navigate(`/tela-final/${Finais.Ruim}`);
                                    } else if (resultado.venceu) {
                                        navigate(`/tela-final/${Finais.Bom}`);
                                    } else {
                                        setJogador(resultado.jogadorAtualizado);
                                        setDescricao(resultado.mensagem);
                                    }
                                }
                            }
                        }}
                    />
                    <BotaoAcao
                        valor="Upgrade (200 moedas)"
                        acao={async () => {
                            // if (jogador) {
                            //     if (jogador.dinheiro < 200) {
                            //         setDescricao('Você procura, em vão, dinheiro no bolso.');
                            //     } else {
                            //         const novoJogador = await atualizarJogador({
                            //             ...jogador,
                            //             id: jogador.id,
                            //             dinheiro: jogador.dinheiro - 200,
                            //             energia: jogador.energia,
                            //             energiaMaxima: jogador.energiaMaxima + 100,
                            //             diaAtual: jogador.diaAtual,
                            //             assombrometroAtual: jogador.assombrometroAtual,
                            //         });

                            //         if (novoJogador) {
                            //             setJogador(novoJogador);
                            //         }
                            //     }
                            // }
                        }}
                    />
                </div>

                <div className="box">
                    <BotaoNavegacao valor="Igreja" destino={`caminho/${Destinos.Igreja}`} />
                    <BotaoNavegacao valor="Funerária" destino={`caminho/${Destinos.Funeraria}`} />
                    <BotaoNavegacao valor="Mausoléus" destino={`caminho/${Destinos.Mausoleus}`} />
                </div>
            </div>
        </div>
    );
};
