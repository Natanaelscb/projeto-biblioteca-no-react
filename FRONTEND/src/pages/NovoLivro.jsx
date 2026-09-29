import { useState } from "react";
import {
    BookOpen,
    User,
    Tag,
    Calendar,
    Package,
    Hash,
    CheckCircle,
    ChevronRight,
} from "lucide-react";

import "./NovoLivro.css";

function NovoLivro() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [anoPublicado, setAnoPublicado] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [quantidadeDisponivel, setQuantidadeDisponivel] = useState("");
    const [fotoUrl, setFotoUrl] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log({
            titulo,
            autor,
            categoria,
            anoPublicado,
            quantidade,
            quantidadeDisponivel,
            fotoUrl
        });
    }

    return (
        <div className="novo-livro">

            <div className="novo-livro-header">
                <h1>Novo Livro</h1>

                <div className="breadcrumb">
                    <span>Livros</span>
                    <ChevronRight size={18} />
                    <p>Novo Livro</p>
                </div>
            </div>


            <div className="livro-card">

                <div className="livro-card-header">
                    <h2>Informações do Livro</h2>

                    <p>
                        Preencha os campos abaixo com as informações do novo livro da biblioteca.
                    </p>
                </div>


                <form onSubmit={handleSubmit}>

                    <div className="livro-form-grid">


                        {/* TÍTULO */}
                        <div className="campo-livro">
                            <label>
                                TÍTULO <span>*</span>
                            </label>

                            <div className="input-livro">
                                <BookOpen size={22} />

                                <input
                                    type="text"
                                    placeholder="Ex: O Senhor dos Anéis"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </div>
                        </div>


                        {/* AUTOR */}
                        <div className="campo-livro">
                            <label>
                                AUTOR <span>*</span>
                            </label>

                            <div className="input-livro">
                                <User size={22} />

                                <input
                                    type="text"
                                    placeholder="Ex: J.R.R. Tolkien"
                                    value={autor}
                                    onChange={(e) => setAutor(e.target.value)}
                                />
                            </div>
                        </div>


                        {/* CATEGORIA */}
                        <div className="campo-livro">
                            <label>
                                CATEGORIA <span>*</span>
                            </label>

                            <div className="input-livro">
                                <Tag size={22} />

                                <select
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                >
                                    <option value="">
                                        Selecione uma categoria
                                    </option>

                                    <option value="Romance">
                                        Romance
                                    </option>

                                    <option value="Ficção">
                                        Ficção
                                    </option>

                                    <option value="Aventura">
                                        Aventura
                                    </option>

                                    <option value="Fantasia">
                                        Fantasia
                                    </option>

                                    <option value="Terror">
                                        Terror
                                    </option>

                                    <option value="Didático">
                                        Didático
                                    </option>

                                    <option value="História">
                                        História
                                    </option>
                                </select>
                            </div>
                        </div>


                        {/* ANO */}
                        <div className="campo-livro">
                            <label>
                                ANO DE PUBLICAÇÃO <span>*</span>
                            </label>

                            <div className="input-livro">
                                <Calendar size={22} />

                                <input
                                    type="number"
                                    placeholder="Ex: 2020"
                                    value={anoPublicado}
                                    onChange={(e) => setAnoPublicado(e.target.value)}
                                />
                            </div>
                        </div>


                        {/* QUANTIDADE */}
                        <div className="campo-livro">
                            <label>
                                QUANTIDADE <span>*</span>
                            </label>

                            <div className="input-livro">
                                <Package size={22} />

                                <input
                                    type="number"
                                    min="1"
                                    placeholder="Ex: 5"
                                    value={quantidade}
                                    onChange={(e) => setQuantidade(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* QUANTIDADEDISPONIVEL */}
                        <div className="campo-livro">
                            <label>
                                QUANTIDADE DISPONIVEL<span>*</span>
                            </label>

                            <div className="input-livro">
                                <Hash size={22} />

                                <input
                                    type="number"
                                    placeholder="Ex: 1-999..."
                                    value={quantidadeDisponivel}
                                    onChange={(e) => setQuantidadeDisponivel(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* FOTO */}
                        <div className="campo-livro">
                            <label>URL DA FOTO</label>

                            <div className="input-livro">
                                <input
                                    type="url"
                                    placeholder="https://exemplo.com/livro.jpg"
                                    value={fotoUrl}
                                    onChange={(e) => setFotoUrl(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>


                    <div className="livro-form-footer">

                        <button
                            type="button"
                            className="btn-cancelar-livro"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="btn-salvar-livro"
                        >
                            <CheckCircle size={21} />
                            Cadastrar Livro
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default NovoLivro;