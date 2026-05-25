import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import { Destinos } from './enums/destinos';
import { Caminho } from './pages/Caminho';
import { Funeraria } from './pages/Funeraria';
import { Igreja } from './pages/Igreja';
import { Incerto } from './pages/Incerto';
import { Mausoleus } from './pages/Mausoleus';
import { PatioPrincipal } from './pages/PatioPrincipal';
import { TelaInicial } from './pages/TelaInicial';
import { JogoProvider } from './providers/JogoProvider';
import { TelaFinal } from './pages/TelaFinal';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <TelaInicial />,
            },
            {
                path: 'tela-final/:final',
                element: <TelaFinal />,
            },
            {
                path: 'caminho/:destino',
                element: <Caminho />,
            },
            {
                path: Destinos.PatioPrincipal,
                element: <PatioPrincipal />,
            },
            {
                path: Destinos.Igreja,
                element: <Igreja />,
            },
            {
                path: Destinos.Mausoleus,
                element: <Mausoleus />,
            },
            {
                path: Destinos.Funeraria,
                element: <Funeraria />,
            },
            {
                path: '*',
                element: <Incerto />,
            },
        ],
    },
]);

export const App = () => {
    return (
        <JogoProvider>
            <RouterProvider router={router} />
        </JogoProvider>
    );
};
