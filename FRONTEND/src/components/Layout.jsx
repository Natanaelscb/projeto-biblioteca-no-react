import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Layout.css"

function Layout() {
    return (
        <div className="app-container">
            <Sidebar />
            <main className="content">
                <Outlet />
            </main>

        </div>
    );

}

export default Layout;