import { useNavigate } from 'react-router-dom';

interface BotaoNavegacaoProps {
    valor: string;
    destino: string | null;
}

export const BotaoNavegacao = ({ valor, destino }: BotaoNavegacaoProps) => {
    const navigate = useNavigate();

    return <button onClick={() => navigate(`/${destino ?? 'perdido'}`)}>{valor}</button>;
};
