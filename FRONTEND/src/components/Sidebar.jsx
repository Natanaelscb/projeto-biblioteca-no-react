import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
    Home, BookOpen, ArrowLeftRight, RotateCcw,
    Users, CalendarCheck, BarChart3, Settings,
} from "lucide-react";

const menuItems = [
    { to: "/", label: "Início", icon: Home, end: true },
    { to: "/emprestimos", label: "Empréstimos", icon: ArrowLeftRight },
    
    { to: "/devolucoes", label: "Devoluções", icon: RotateCcw },
    { to: "/livros", label: "Livros", icon: BookOpen },
    { to: "/usuarios", label: "Usuários", icon: Users },
    { to: "/reservas", label: "Reservas", icon: CalendarCheck },
    { to: "/relatorios", label: "Relatórios", icon: BarChart3 },
    { to: "/configuracoes", label: "Configurações", icon: Settings },
];

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
                {menuItems.map(({ to, label, icon: Icon, end }) => (
                    <NavLink key={to} to={to} end={end} className="sidebar-item">
                        <Icon size={24} />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-user">
                <strong>Administrador</strong>
                <span>admin@biblioteca.com</span>
            </div>
        </aside>
    );
}

export default Sidebar;