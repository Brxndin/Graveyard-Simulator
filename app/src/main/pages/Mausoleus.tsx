import { useContext, useState } from 'react';
import imagemMausoleus from '../assets/images/mausoleus.png';
import { BotaoAcao } from '../components/BotaoAcao';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Titulo } from '../components/Titulo';
import { JogoContext } from '../contexts/JogoContext';
import { Destinos } from '../enums/destinos';
import { useAcenderVelas } from '../hooks/useAcenderVelas';
import { useVarrer } from '../hooks/useVarrer';

const descricoes = [
    'Ao chegar nos túmulos e mausoléus, você se depara com as mais diversas estátuas de anjos e pessoas, quase como se elas estivessem olhando para você.',
    'Os mausoléus, lindas e assustadoras construções fúnebres, te passam a sensação de estar vivendo em um passado distante.',
    'A luz leve e sombria da Lua destaca o formato e as sombras dos túmulos e mausoléus, e o vento balnça os galhos das árvores, como se elas estivessem vivas.',
];

export const Mausoleus = () => {
    const { jogador, setJogador } = useContext(JogoContext);
    const { varrer } = useVarrer();
    const { acenderVelas } = useAcenderVelas();
    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao, setDescricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <Titulo texto="Mausoléus" />
            <BoxTexto descricao={descricao} imagem={imagemMausoleus} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoAcao
                        valor="Falar com o Coveiro"
                        acao={async () => {
                            setDescricao('Você vai falar com o coveiro, que parece confuso. Ele diz que, no dia anterior, lembra de ter trancado um dos mausoléus, mas que hoje chegou e ele estava apenas enconstado. Ele diz que deve ser apenas coisa da cabeça dele.');
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
