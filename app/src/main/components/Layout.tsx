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
                const novoJodador = await buscarJogador(1);

                if (novoJodador) {
                    setJogador(novoJodador);
                }
            };

            dadosIniciais();
        }
    }, [buscarJogador, jogador, setJogador]);

    if (isLoading) return <Paragrafo texto="Acordando os mortos... aguarde." />

    return (
        <div id="layout">
            <Status dinheiro={jogador?.dinheiro} energia={jogador?.energia} energiaMaxima={jogador?.energiaMaxima} />
            <Outlet />
        </div>
    );
}
