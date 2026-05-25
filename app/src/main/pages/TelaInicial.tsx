import { useContext, useState } from 'react';
import { BotaoAcao } from '../components/BotaoAcao';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { Paragrafo } from '../components/Paragrafo';
import { Titulo } from '../components/Titulo';
import { JogoContext } from '../contexts/JogoContext';
import { Destinos } from '../enums/destinos';
import { useResetar } from '../hooks/useResetar';

export const TelaInicial = () => {
    const { jogador, setJogador } = useContext(JogoContext);
    const { resetar, erroResetar } = useResetar();
    const [mensagem, setMensagem] = useState<string | null>(null);

    return (
        <div>
            <Titulo texto="Graveyard Simulator" />
            <Paragrafo texto="Nas noites de luar, com o voar dos morcegos, você deverá caminhar entre os mortos" />
            {mensagem && <Paragrafo texto={mensagem} />}
            {erroResetar && <Paragrafo texto={erroResetar} />}
            <div className="container-botoes">
                <div className="box">
                    <BotaoNavegacao valor="Entrar no Cemitério" destino={Destinos.PatioPrincipal} />
                    <BotaoAcao
                        valor="Resetar"
                        acao={async () => {
                            if (jogador) {
                                const resultado = await resetar(jogador);

                                if (resultado) {
                                    setJogador(resultado.jogadorAtualizado);

                                    setMensagem('Jogo resetado com sucesso.');
                                } else {
                                    setMensagem(null);
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
