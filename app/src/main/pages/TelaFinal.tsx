import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { Paragrafo } from '../components/Paragrafo';
import { Titulo } from '../components/Titulo';
import { JogoContext } from '../contexts/JogoContext';
import { Finais } from '../enums/finais';
import { useResetar } from '../hooks/useResetar';

export const TelaFinal = () => {
    const { jogador, setJogador } = useContext(JogoContext);
    const { final } = useParams();
    const { resetar } = useResetar();

    useEffect(() => {
        if (jogador) {
            const dadosIniciais = async () => {
                const resultado = await resetar(jogador);

                if (resultado) {
                    setJogador(resultado.jogadorAtualizado);
                }
            };

            dadosIniciais();
        }
    }, []);

    return (
        <div>
            {final === Finais.Bom ? (
                <>
                    <Titulo texto="Parabéns!" />
                    <Paragrafo texto="Você passou 20 dias no cemitério lidando com assombrações e trabalhos diários e terminou o jogo." />
                </>
            ) : (
                <>
                    <Titulo texto="Fim de Jogo!" />
                    <Paragrafo texto="Você não conseguiu cuidar do cemitério por 20 dias e acabou deixando ele assombrado." />
                </>
            )}
            <div className="container-botoes">
                <div className="box">
                    <BotaoNavegacao valor="Tela Inicial" destino={''} />
                </div>
            </div>
        </div>
    );
};
