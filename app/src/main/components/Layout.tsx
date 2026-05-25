import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { JogoContext } from '../contexts/JogoContext';
import { useBuscarJogador } from '../hooks/useBuscarJogador';
import { Paragrafo } from './Paragrafo';
import { Status } from './Status';

export default function Layout() {
    const { jogador, setJogador } = useContext(JogoContext);
    const { isLoading, buscarJogador } = useBuscarJogador();

    useEffect(() => {
        if (!jogador) {
            const dadosIniciais = async () => {
                const resultado = await buscarJogador(1);

                if (resultado) {
                    setJogador(resultado.jogador);
                }
            };

            dadosIniciais();
        }
    }, [buscarJogador, jogador, setJogador]);

    if (isLoading) return <Paragrafo texto="Acordando os mortos... aguarde." />

    return (
        <div id="layout">
            <Status dia={jogador?.diaAtual} assombrometro={jogador?.assombrometroAtual} dinheiro={jogador?.dinheiro} energia={jogador?.energia} energiaMaxima={jogador?.energiaMaxima} />
            <Outlet />
        </div>
    );
}
