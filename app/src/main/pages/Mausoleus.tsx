// aqui vai ter os mausoléus com as opções de criar um novo e uma lista dos mausoléus já criados (fazer em formato de cards)
// os mausoléus terão opção de ver quem está alocado, fazer upgrade de lugares (até 6) e recolher o dinheiro dos moradores (que, em sua maioria, serão mortos vivos)
// descrever as estátuas de anjos ou de pessoas que têm nos mausoléus
// verificar se faz sentido ter gárgulas ou estátuas de esqueletos também que representam a morte

import { useContext, useState } from 'react';
import imagemMausoleus from '../assets/images/mausoleus.png';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { BoxTexto } from '../components/BoxTexto';
import { Titulo } from '../components/Titulo';
import { Destinos } from '../enums/destinos';
import { BotaoAcao } from '../components/BotaoAcao';
import { useAtualizarJogador } from '../hooks/useAtualizarJogador';
import { JogoContext } from '../contexts/JogoContext';

export const Mausoleus = () => {
    const { jogador, setJogador } = useContext(JogoContext);
    const { atualizarJogador } = useAtualizarJogador();

    // verificar se não é melhor pegar esses dados de um repository mockado mesmo
    const descricoes = [
        'Ao chegar nos túmulos e mausoléus, você se depara com as mais diversas estátuas de anjos e pessoas, quase como se elas estivessem olhando para você.',
        'Os mausoléus, lindas e assustadoras construções fúnebres, te passam a sensação de estar vivendo em um passado distante.',
        'A luz leve e sombria da Lua destaca o formato e as sombras dos túmulos e mausoléus, e o vento balnça os galhos das árvores, como se elas estivessem vivas.',
    ];

    const [numeroAleatorio] = useState(() => Math.random());
    const [descricao, setDescricao] = useState(descricoes[Math.floor(numeroAleatorio * descricoes.length)]);

    return (
        <div>
            <Titulo texto='Mausoléus'/>
            <BoxTexto descricao={descricao} imagem={imagemMausoleus} />
            <div className="container-botoes">
                <div className="box">
                    <BotaoAcao
                        valor="Acender velas"
                        acao={async () => {
                            if (jogador) {
                                if (jogador.energia < 10) {
                                    setDescricao('Você tenta, mas está muito cansado para fazer qualquer coisa.');
                                } else {
                                    const novoJogador = await atualizarJogador({
                                        id: jogador.id,
                                        dinheiro: jogador.dinheiro + 100,
                                        energia: jogador.energia - 10,
                                        energiaMaxima: jogador.energiaMaxima,
                                    });

                                    if (novoJogador) {
                                        setJogador(novoJogador);

                                        setDescricao('Com uma caixa de fósforos, você passa entre os tumulos e mausoléus acendendo as velas que iluminam ao mesmo tempo a noite escura e as lembranças daqueles que já se foram.');
                                    }
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
