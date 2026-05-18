import { useState } from "react";
import type { Jogador } from "../../domain/entities/jogador";
import { JogoContext } from "../contexts/JogoContext";
import type { Mausoleu } from "../../domain/entities/mausoleu";

export const JogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [jogador, setJogador] = useState<Jogador | null>(null);
    const [mausoleus, setMausoleus] = useState<Mausoleu[]>([]);

    return (
        <JogoContext.Provider value={{ jogador, setJogador, mausoleus, setMausoleus }}>
            {children}
        </JogoContext.Provider>
    );
};
