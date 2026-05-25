import { useParams } from 'react-router-dom';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { Paragrafo } from '../components/Paragrafo';
import { Titulo } from '../components/Titulo';
import { Finais } from '../enums/finais';
import { useEffect } from 'react';

export const TelaFinal = () => {
    const { final } = useParams();

    useEffect(() => {
        // aquin devera ter a função de resetar o jogo
        // talvez um hook separado
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
