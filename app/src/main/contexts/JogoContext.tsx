import { createContext } from 'react';
import type { Jogador } from '../../domain/entities/jogador';
import type { Mausoleu } from '../../domain/entities/mausoleu';

interface JogoContextType {
    jogador: Jogador | null;
    setJogador: (jogador: Jogador | null) => void;
    mausoleus: Mausoleu[];
    setMausoleus: (mausoleus: Mausoleu[]) => void;
}

export const JogoContext = createContext<JogoContextType>({} as JogoContextType);
