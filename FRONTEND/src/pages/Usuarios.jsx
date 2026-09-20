import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Search,
    Plus,
    Pencil,
    Trash2,
    Eye,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import "./Usuarios.css";


function Usuarios() {
    const [busca, setBusca] = useState("");
    const navigate = useNavigate();

    const usuarios = [
        {
            matricula: 2450114,
            nome: "Ana Silva",
            email: "adminh@library.com",
            telefone: "+98-6382-6887",
            status: "Ativo",
        },
        {
            matricula: 2,
            nome: "Carlos Mendes",
            email: "carlos@us@email.com",
            telefone: "+98-99419168",
            status: "Inativo",
        },
        {
            matricula: 36,
            nome: "Beatriz Costa",
            email: "beatriz@osta@gmail.com",
            telefone: "+96-29301025",
            status: "Inativo",
        },
        {
            matricula: 40,
            nome: "Jora Silva",
            email: "beatriz@o@library.com",
            telefone: "+98-99419267",
            status: "Ativo",
        },
        {
            matricula: 50,
            nome: "Árda Mendes",
            email: "beatriz@birva@gmail.com",
            telefone: "+90-99419169",
            status: "Ativo",
        },
        {
            matricula: 65,
            nome: "Badriz Costa",
            email: "beatriz@batriz@email.com",
            telefone: "+92-88209286",
            status: "Inativo",
        },
        {
            matricula: 70,
            nome: "Beatriz Costa",
            email: "beatrizjt@library.com",
            telefone: "+98-99479918",
            status: "Inativo",
        },
    ];

    const usuariosFiltrados = usuarios.filter((usuario) =>
        `${usuario.nome} ${usuario.email}`
            .toLowerCase()
            .includes(busca.toLowerCase())
    );

    return (
        <main className="usuarios-page">

            {/* CABEÇALHO */}
            <header className="usuarios-header">
                <div>
                    <h1>Usuários</h1>
                    <p>Gerencie os usuários cadastrados na biblioteca</p>
                </div>

                <button className="btn-novo-usuario"
                    onClick={() => navigate("/usuario/novousuario")}
                    >
                    <Plus size={19} />
                    Novo Usuário
                </button>
            </header>

            {/* FILTROS */}
            <section className="filtros-card">

                <div className="campo-pesquisa">
                    <Search size={19} />
                    <input
                        type="text"
                        placeholder="Pesquisar por nome, email..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </div>

                <div className="filtro-grupo">
                    <label>Filtrar por Status</label>

                    <div className="filtro-botoes">
                        <button>
                            Ativo
                            <ChevronDown size={15} />
                        </button>

                        <button>
                            Inativo
                            <ChevronDown size={15} />
                        </button>

                        <button>
                            Bloqueado
                            <ChevronDown size={15} />
                        </button>
                    </div>
                </div>

                <div className="filtro-grupo">
                    <label>Tipo de Usuário</label>

                    <div className="filtro-botoes">
                        <button>
                            Aluno
                            <ChevronDown size={15} />
                        </button>

                        <button>
                            Professor
                        </button>

                        <button>
                            Funcionário
                            <ChevronDown size={15} />
                        </button>
                    </div>
                </div>

            </section>

            {/* TABELA */}
            <section className="tabela-card">

                <div className="tabela-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Matricula</th>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {usuariosFiltrados.map((usuario) => (
                                <tr key={usuario.matricula}>

                                    <td>{usuario.matricula}</td>

                                    <td>
                                        <div className="foto-usuario">
                                            <span>
                                                {usuario.nome.charAt(0)}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="nome-usuario">
                                        {usuario.nome}
                                    </td>

                                    <td className="email-usuario">
                                        {usuario.email}
                                    </td>

                                    <td>
                                        {usuario.telefone}
                                    </td>

                                    <td>
                                        <span
                                            className={`status ${usuario.status.toLowerCase()
                                                }`}
                                        >
                                            {usuario.status}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="acoes">

                                            <button
                                                className="acao editar"
                                                title="Editar"
                                            >
                                                <Pencil size={16} />
                                            </button>

                                            <button
                                                className="acao excluir"
                                                title="Excluir"
                                            >
                                                <Trash2 size={16} />
                                            </button>

                                            <button
                                                className="acao visualizar"
                                                title="Visualizar"
                                            >
                                                <Eye size={17} />
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* PAGINAÇÃO */}
                <div className="paginacao">

                    <button className="pagina-seta">
                        <ChevronLeft size={17} />
                    </button>

                    <button className="pagina ativa">
                        1
                    </button>

                    <button className="pagina">
                        2
                    </button>

                    <button className="pagina">
                        3
                    </button>

                    <button className="pagina-seta">
                        <ChevronRight size={17} />
                    </button>

                </div>

            </section>

        </main>
    );
}

export default Usuarios;