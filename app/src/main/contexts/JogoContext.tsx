import { createContext } from 'react';

export interface JogadorData {
    id?: number;
    energia: number;
    dinheiro: number;
    energiaMaxima: number;
    diaAtual: number;
    assombrometroAtual: number;
}

interface JogoContextType {
    jogador: JogadorData | null;
    setJogador: (jogador: JogadorData | null) => void;
}

export const JogoContext = createContext<JogoContextType>({} as JogoContextType);
