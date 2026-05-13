import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import { Destinos } from './enums/Destinos';
import { Caminho } from './pages/Caminho';
import { Igreja } from './pages/Igreja';
import { Incerto } from './pages/Incerto';
import { Mausoleus } from './pages/Mausoleus';
import { Necroterio } from './pages/Necroterio';
import { PatioPrincipal } from './pages/PatioPrincipal';
import { TelaInicial } from './pages/TelaInicial';

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
                path: Destinos.Necroterio,
                element: <Necroterio />,
            },
            {
                path: '*',
                element: <Incerto />,
            },
        ],
    },
]);

export const App = () => {
    return <RouterProvider router={router} />;
};
