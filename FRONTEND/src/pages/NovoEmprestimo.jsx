import { useNavigate } from "react-router-dom";
import "./Emprestimos.css"
import { useState } from "react";
function NovoEmprestimo() {
   /*  const navigate = useNavigate();
    const [matricula, setMatricula] = useState("");
    const [nome, setNome] = useState("");
    const [mensagemSucesso, SetMensagemSucesso] = useState(false)
    function handleSubmit(e) {
        pass
    }; */

    return (
        <div>
            <h1>Novo Empréstimo</h1>

            <form action="#" id="emprestimo">

                <section id="dadosaluno">
                    <h2>Aluno</h2>

                    <label htmlFor="matricula">Matrícula: </label>
                    <input
                        type="number"
                        id="matricula"
                        name="matricula"
                        value={matricula}
                       /*  onChange={(e) => setMatricula(e.target.value)} */
                    />

                    <br />
                    <br />

                    <label htmlFor="nome">Nome do Aluno: </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={nome}
                       /*  onChange={(e) => setNome(e.target.value)} */
                    />

                    <br />
                    <br />
                </section>

                <section>
                    <h2>Livro</h2>

                    <label htmlFor="tituloDoLivro">Título do livro: </label>
                    <input
                        type="text"
                        id="tituloDoLivro"
                        name="tituloDoLivro"
                    />

                    <br />
                    <br />

                    <label htmlFor="autor">Autor: </label>
                    <input
                        type="text"
                        id="autor"
                        name="autor"
                    />

                    <br />
                    <br />
                </section>

                <section>
                    <h2>Empréstimo</h2>

                    <label htmlFor="dataEmprestimo">
                        Data do Empréstimo:
                    </label>

                    <input
                        type="date"
                        id="dataEmprestimo"
                        name="dataEmprestimo"
                    />

                    <br />
                    <br />

                    <label htmlFor="dataDevolucao">
                        Data de Devolução:
                    </label>

                    <input
                        type="date"
                        id="dataDevolucao"
                        name="dataDevolucao"
                    />
                </section>

                <button type="submit">
                    Registrar Empréstimo
                </button>

            </form>
        </div>
    );
}

export default NovoEmprestimo;