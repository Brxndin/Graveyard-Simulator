import { useState } from "react";
import { JogoContext, type JogadorData } from "../contexts/JogoContext";

export const JogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [jogador, setJogador] = useState<JogadorData | null>(null);

    return (
        <JogoContext.Provider value={{ jogador, setJogador }}>
            {children}
        </JogoContext.Provider>
    );
};
