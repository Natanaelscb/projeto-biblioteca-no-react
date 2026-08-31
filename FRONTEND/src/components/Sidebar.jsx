import { NavLink } from "react-router-dom";
import "./Sidebar.css"
import {
    Home,
    BookOpen,
    ArrowLeftRight,
    RotateCcw,
    Users,
    CalendarCheck,
    BarChart3,
    Settings
} from "lucide-react";



function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-brand">
                <BookOpen size={40} />

                <div>
                    <h2>Biblioteca</h2>
                    <span>Empréstimos</span>
                </div>
            </div>

            <nav className="sidebar-nav">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "sidebar-item active" : "sidebar-item"
                    }
                >
                    <Home size={24} />
                    <span>Início</span>
                </NavLink>


                <NavLink
                    to="/emprestimos"
                    className={({ isActive }) =>
                        isActive ? "sidebar-item active" : "sidebar-item"
                    }
                >
                    <Home size={24} />
                    <span>Empréstimos</span>
                </NavLink>

                <a href="#">
                    <RotateCcw size={24} />
                    <span>Devoluções</span>
                </a>

                <NavLink
                    to="/Livros"
                    className={({ isActive }) =>
                        isActive ? "sidebar-item active" : "sidebar-item"
                    }
                >
                    <BookOpen size={24} />
                    <span>Livros</span>
                </NavLink>
                <a href="#">
                    <Users size={24} />
                    <span>Usuários</span>
                </a>

                <a href="#">
                    <CalendarCheck size={24} />
                    <span>Reservas</span>
                </a>

                <a href="#">
                    <BarChart3 size={24} />
                    <span>Relatórios</span>
                </a>

                <a href="#">
                    <Settings size={24} />
                    <span>Configurações</span>
                </a>

            </nav>

            <div className="sidebar-user">
                <strong>Administrador</strong>
                <span>admin@biblioteca.com</span>
            </div>

        </aside>
    );
}

export default Sidebar;