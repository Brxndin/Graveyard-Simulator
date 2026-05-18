import { useContext, useEffect } from 'react';
import { BotaoNavegacao } from '../components/BotaoNavegacao';
import { Paragrafo } from '../components/Paragrafo';
import { Titulo } from '../components/Titulo';
import { JogoContext } from '../contexts/JogoContext';
import { Destinos } from '../enums/destinos';
import { useBuscarJogador } from '../hooks/useBuscarJogador';

export const TelaInicial = () => {
    const { setJogador } = useContext(JogoContext);
    const { jogador, isLoading, buscarJogador } = useBuscarJogador();

    useEffect(() => {
        buscarJogador(1);
    }, [buscarJogador]);

    useEffect(() => {
        if (jogador) {
            setJogador(jogador);
        }
    }, [jogador, setJogador]);

    if (isLoading) return <Paragrafo texto="Acordando os mortos... aguarde." />

    return (
        <div>
            <Titulo texto="Graveyard Simulator" />
            <Paragrafo texto='Nas noites de luar, com o voar dos morcegos, você deverá caminhar entre os mortos' />
            <div className="center">
                <BotaoNavegacao valor="Entrar no Cemitério" destino={Destinos.PatioPrincipal} />
            </div>
        </div>
    );
};
