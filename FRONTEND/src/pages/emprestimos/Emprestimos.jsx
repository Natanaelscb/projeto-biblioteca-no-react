import { useNavigate } from "react-router-dom";
import {
    Search,
    Plus,
    Filter,
    Download,
    Eye,
    Pencil,
    Undo2,
    ChevronLeft,
    ChevronRight,
    ChevronDown
} from "lucide-react";

import "./Emprestimos.css";

function Emprestimos() {

    const navigate = useNavigate();

    const emprestimos = [
        {
            usuario: "João Silva",
            email: "joao.silva@email.com",
            livro: "Clean Code",
            autor: "Robert C. Martin",
            capa: "https://covers.openlibrary.org/b/title/Clean%20Code-M.jpg",
            data: "10/06/2026",
            devolucao: "17/06/2026",
            status: "Ativo"
        },
        {
            usuario: "Maria Souza",
            email: "maria.souza@email.com",
            livro: "Java Básico",
            autor: "Herbert Schildt",
            capa: "https://covers.openlibrary.org/b/title/Java-M.jpg",
            data: "08/06/2026",
            devolucao: "15/06/2026",
            status: "Atrasado"
        },
        {
            usuario: "Pedro Lima",
            email: "pedro.lima@email.com",
            livro: "Python para Todos",
            autor: "Luiz Otávio Miranda",
            capa: "https://covers.openlibrary.org/b/title/Python-M.jpg",
            data: "12/06/2026",
            devolucao: "19/06/2026",
            status: "Ativo"
        },
        {
            usuario: "Ana Pereira",
            email: "ana.pereira@email.com",
            livro: "O Poder do Hábito",
            autor: "Charles Duhigg",
            capa: "https://covers.openlibrary.org/b/title/The%20Power%20of%20Habit-M.jpg",
            data: "01/06/2026",
            devolucao: "08/06/2026",
            status: "Devolvido"
        },
        {
            usuario: "Lucas Almeida",
            email: "lucas.almeida@email.com",
            livro: "Mindset",
            autor: "Carol S. Dweck",
            capa: "https://covers.openlibrary.org/b/title/Mindset-M.jpg",
            data: "03/06/2026",
            devolucao: "10/06/2026",
            status: "Próximo do vencimento"
        }
    ];

    return (
        <main className="emprestimos-page">

            {/* CABEÇALHO */}

            <div className="emprestimos-header">

                <div>
                    <h1>Empréstimos</h1>

                    <div className="breadcrumb">
                        <span>Início</span>
                        <span>›</span>
                        <strong>Empréstimos</strong>
                    </div>
                </div>

                <button
                    className="btn-novo"
                    onClick={() => navigate("/emprestimos/novo")}
                >
                    <Plus size={21} />
                    Novo Empréstimo
                </button>

            </div>


            {/* CARD PRINCIPAL */}

            <section className="emprestimos-card">

                {/* BARRA DE PESQUISA */}

                <div className="card-toolbar">

                    <div className="search-emprestimos">
                        <Search size={21} />

                        <input
                            type="text"
                            placeholder="Buscar empréstimos..."
                        />
                    </div>


                    <div className="toolbar-buttons">

                        <button className="toolbar-btn">
                            <Filter size={20} />
                            Filtrar
                        </button>

                        <button className="toolbar-btn">
                            <Download size={20} />
                            Exportar
                        </button>

                    </div>

                </div>


                {/* TABELA */}

                <div className="tabela-container">

                    <table>

                        <thead>
                            <tr>
                                <th>Usuário</th>
                                <th>Livro</th>
                                <th>Data Empréstimo</th>
                                <th>Devolução Prevista</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>


                        <tbody>

                            {emprestimos.map((emprestimo, index) => (

                                <tr key={index}>

                                    {/* USUÁRIO */}

                                    <td>

                                        <div className="usuario">

                                            <div className="avatar">
                                                {emprestimo.usuario.charAt(0)}
                                            </div>

                                            <div>
                                                <strong>{emprestimo.usuario}</strong>
                                                <span>{emprestimo.email}</span>
                                            </div>

                                        </div>

                                    </td>


                                    {/* LIVRO */}

                                    <td>

                                        <div className="livro">

                                            <img
                                                src={emprestimo.capa}
                                                alt={emprestimo.livro}
                                            />

                                            <div>
                                                <strong>{emprestimo.livro}</strong>
                                                <span>{emprestimo.autor}</span>
                                            </div>

                                        </div>

                                    </td>


                                    {/* DATA */}

                                    <td>
                                        {emprestimo.data}
                                    </td>


                                    {/* DEVOLUÇÃO */}

                                    <td>
                                        {emprestimo.devolucao}
                                    </td>


                                    {/* STATUS */}

                                    <td>

                                        <span
                                            className={`status status-${index}`}
                                        >
                                            <span className="status-dot"></span>
                                            {emprestimo.status}
                                        </span>

                                    </td>


                                    {/* AÇÕES */}

                                    <td>

                                        <div className="acoes">

                                            <button title="Visualizar">
                                                <Eye size={19} />
                                            </button>

                                            <button title="Editar">
                                                <Pencil size={18} />
                                            </button>

                                            <button title="Devolver">
                                                <Undo2 size={18} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* RODAPÉ DA TABELA */}

                <div className="tabela-footer">

                    <span className="resultado">
                        Mostrando 1 a 5 de 32 empréstimos
                    </span>


                    <div className="paginacao">

                        <button>
                            <ChevronLeft size={18} />
                        </button>

                        <button className="pagina-atual">
                            1
                        </button>

                        <button>
                            2
                        </button>

                        <button>
                            3
                        </button>

                        <button>
                            4
                        </button>

                        <span>...</span>

                        <button>
                            7
                        </button>

                        <button>
                            <ChevronRight size={18} />
                        </button>

                        <button className="por-pagina">
                            10 por página
                            <ChevronDown size={16} />
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Emprestimos;