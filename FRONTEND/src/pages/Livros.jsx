import { useState } from "react";
import {
    Search,
    ChevronDown,
    SlidersHorizontal,
    Plus,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import "./Livros.css";

function Livros() {
    const [pesquisa, setPesquisa] = useState("");

    const livros = [
        {
            id: 1,
            capa: "https://covers.openlibrary.org/b/isbn/9788535902777-M.jpg",
            titulo: "Dom Casmurro",
            autor: "Machado de Assis",
            categoria: "Romance",
            quantidade: 3,
            status: "Disponível",
        },
        {
            id: 2,
            capa: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
            titulo: "1984",
            autor: "George Orwell",
            categoria: "Ficção Científica",
            quantidade: 2,
            status: "Emprestado",
        },
        {
            id: 3,
            capa: "https://covers.openlibrary.org/b/isbn/9780261102217-M.jpg",
            titulo: "O Hobbit",
            autor: "J.R.R. Tolkien",
            categoria: "Fantasia",
            quantidade: 4,
            status: "Disponível",
        },
        {
            id: 4,
            capa: "https://covers.openlibrary.org/b/isbn/9780375842207-M.jpg",
            titulo: "A Menina que Roubava Livros",
            autor: "Markus Zusak",
            categoria: "Romance",
            quantidade: 1,
            status: "Disponível",
        },
        {
            id: 5,
            capa: "https://covers.openlibrary.org/b/isbn/9780156030301-M.jpg",
            titulo: "Ensaio sobre a Cegueira",
            autor: "José Saramago",
            categoria: "Ficção",
            quantidade: 2,
            status: "Emprestado",
        },
        {
            id: 6,
            capa: "https://covers.openlibrary.org/b/isbn/9788534920524-M.jpg",
            titulo: "A Bíblia Sagrada",
            autor: "Vários",
            categoria: "Religioso",
            quantidade: 5,
            status: "Disponível",
        },
    ];

    const livrosFiltrados = livros.filter((livro) => {
        const texto = pesquisa.toLowerCase();

        return (
            livro.titulo.toLowerCase().includes(texto) ||
            livro.autor.toLowerCase().includes(texto)
        );
    });

    function novoLivro() {
        console.log("Abrir formulário de novo livro");
    }

    function editarLivro(id) {
        console.log("Editar livro:", id);
    }

    function excluirLivro(id) {
        console.log("Excluir livro:", id);
    }

    return (
        <main className="livros-page">

            {/* CABEÇALHO */}
            <div className="livros-header">
                <h1>Livros</h1>

                <button className="btn-novo-livro" onClick={novoLivro}>
                    <Plus size={22} />
                    Novo Livro
                </button>
            </div>

            {/* ÁREA PRINCIPAL */}
            <section className="livros-card">

                {/* FILTROS */}
                <div className="livros-filtros">

                    {/* PESQUISA */}
                    <div className="campo-pesquisa">
                        <Search size={22} />

                        <input
                            type="text"
                            placeholder="Pesquisar por título, autor ou ISBN..."
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                        />
                    </div>

                    {/* CATEGORIA */}
                    <div className="select-container">
                        <select>
                            <option>Todas as categorias</option>
                            <option>Romance</option>
                            <option>Fantasia</option>
                            <option>Ficção</option>
                            <option>Ficção Científica</option>
                            <option>Religioso</option>
                        </select>

                        <ChevronDown size={20} />
                    </div>

                    {/* STATUS */}
                    <div className="select-container">
                        <select>
                            <option>Todos os status</option>
                            <option>Disponível</option>
                            <option>Emprestado</option>
                        </select>

                        <ChevronDown size={20} />
                    </div>

                    {/* BOTÃO FILTROS */}
                    <button className="btn-filtros">
                        <SlidersHorizontal size={20} />
                        Filtros
                    </button>

                </div>

                {/* TABELA */}
                <div className="tabela-container">
                    <table>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Capa</th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>Quantidade</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {livrosFiltrados.map((livro) => (
                                <tr key={livro.id}>

                                    <td>{livro.id}</td>

                                    <td>
                                        <img
                                            className="capa-livro"
                                            src={livro.capa}
                                            alt={`Capa de ${livro.titulo}`}
                                        />
                                    </td>

                                    <td className="titulo-livro">
                                        {livro.titulo}
                                    </td>

                                    <td>{livro.autor}</td>

                                    <td>{livro.categoria}</td>

                                    <td>{livro.quantidade}</td>

                                    <td>
                                        <span
                                            className={
                                                livro.status === "Disponível"
                                                    ? "status disponivel"
                                                    : "status emprestado"
                                            }
                                        >
                                            <span className="status-bolinha"></span>
                                            {livro.status}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="acoes">

                                            <button
                                                className="btn-editar"
                                                onClick={() => editarLivro(livro.id)}
                                                title="Editar"
                                            >
                                                <Pencil size={19} />
                                            </button>

                                            <button
                                                className="btn-excluir"
                                                onClick={() => excluirLivro(livro.id)}
                                                title="Excluir"
                                            >
                                                <Trash2 size={19} />
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
                        <ChevronLeft size={20} />
                    </button>

                    <button className="pagina ativa">1</button>

                    <button className="pagina">2</button>

                    <button className="pagina">3</button>

                    <span className="pagina-reticencias">...</span>

                    <button className="pagina">10</button>

                    <button className="pagina-seta">
                        <ChevronRight size={20} />
                    </button>

                </div>

            </section>

        </main>
    );
}

export default Livros;