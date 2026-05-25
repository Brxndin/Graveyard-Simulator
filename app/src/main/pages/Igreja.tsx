import { useContext, useState } from 'react';
import imagemIgreja from '../assets/images/igreja.png';
import { BotaoAcao } from '../components/BotaoAcao';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Titulo } from '../components/Titulo';
import { JogoContext } from '../contexts/JogoContext';
import { Destinos } from '../enums/destinos';
import { useAcenderVelas } from '../hooks/useAcenderVelas';
import { useVarrer } from '../hooks/useVarrer';

const descricoes = [
    'Você entra na igreja e se depara com lindos vitrais coloridos, principalmente os vermelhos e roxos, desenhando figuras no chão com a luz que vem de fora, criando uma atmosfera ao mesmo tempo linda e meio macabra.',
    'Ao entrar na igreja, você ouve de fundo o som do órgão principal, tocando melodias e arranjos muito bonitos e arrepiantes de Bach, te lembrando histórias como do Fantasma da Ópera.',
    'Na igreja, você escuta o velho sino marcando a hora, fazendo com que a hora de término do turno fique cada vez mais próxima.',
];

export const Igreja = () => {
     const { jogador, setJogador } = useContext(JogoContext);
    const { varrer } = useVarrer();
    const { acenderVelas } = useAcenderVelas();
    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao, setDescricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <Titulo texto='Igreja'/>
            <BoxTexto descricao={descricao} imagem={imagemIgreja} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoAcao
                        valor="Falar com o Padre"
                        acao={async () => {
                            setDescricao('Você fala com o padre. Ele diz que, apesar das trevas da noite, não podemos nos deixar abalar, pois Deus está conosco. Você continua com medo de certas coisas mesmo assim.');
                        }}
                    />
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
                        valor="Acender Velas"
                        acao={async () => {
                            if (jogador) {
                                const resultado = await acenderVelas(jogador);

                                if (resultado) {
                                    setJogador(resultado.jogadorAtualizado);

                                    setDescricao(resultado.mensagem);
                                }
                            }
                        }}
                    />
                </div>
                <div className="box">
                    <BotaoNavegacao valor="Pátio Principal" destino={`caminho/${Destinos.PatioPrincipal}`} />
                </div>
            </div>
        </div>
    );
};
