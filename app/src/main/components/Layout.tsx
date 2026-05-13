import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div id="layout">
            <Outlet />
        </div>
    );
}
