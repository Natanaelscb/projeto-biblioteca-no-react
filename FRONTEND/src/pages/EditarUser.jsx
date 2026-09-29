import { atualizarUsuario, buscarUsuario } from "../services/usuariosApi";
import { useNavigate } from "react-router-dom";
import "./NovoUsuario.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {

    Hash,
    User,
    Mail,
    Phone,
    CheckCircle,
    ChevronRight,
} from "lucide-react";


function EditarUser() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [mensagem, setMensagem] = useState("")
    const [matricula, setMatricula] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [status, setStatus] = useState("ativo");

    useEffect(() => {
        async function carregarUsuario() {
            try {
                const usuario = await buscarUsuario(id)

                setMatricula(usuario.matricula);
                setNome(usuario.nome);
                setEmail(usuario.email);
                setTelefone(usuario.telefone);
                setStatus(usuario.status);

            } catch (erro) {
                console.log(erro);
            }
        }
        carregarUsuario();

    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const usuario = {
                matricula,
                nome,
                email,
                telefone,
                status
            }
            const dados = await atualizarUsuario(id, usuario);

            console.log(dados);
            console.log("Usuario foi Atualizado")
            setMensagem("Usuário atualizado com sucesso!");

        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <div className="novo-usuario-page">

            {/* Cabeçalho */}
            <div className="novo-usuario-header">

                <div>
                    <h1>Atualizar Usuário</h1>

                    <div className="novo-usuario-breadcrumb">
                        <button type="button">
                            Usuários
                        </button>

                        <ChevronRight size={16} />

                        <span>Atualizar Usuário</span>
                    </div>
                </div>
            </div>


            {/* Card principal */}
            <div className="novo-usuario-card">

                <div className="novo-usuario-card-header">
                    <h2>Informações do Usuário</h2>

                    <p>
                        Preencha os campos abaixo com as informações que queira atualizar.
                    </p>
                </div>


                <div className="novo-usuario-divider"></div>


                {/* Formulário visual */}
                <form onSubmit={handleSubmit}>

                    {/* Matrícula e Nome */}
                    <div className="novo-usuario-grid">

                        <div className="novo-usuario-field">

                            <label htmlFor="matricula">
                                MATRÍCULA <span>*</span>
                            </label>

                            <div className="novo-usuario-input-wrapper">
                                <Hash size={19} />

                                <input
                                    type="text"
                                    id="matricula"
                                    name="matricula"
                                    placeholder="Ex: 20261094"
                                    minLength={8}
                                    maxLength={8}
                                    value={matricula}
                                    required
                                    onChange={(e) => setMatricula(e.target.value.replace(/\D/g, ""))}
                                />
                            </div>

                        </div>


                        <div className="novo-usuario-field">

                            <label htmlFor="nome">
                                NOME COMPLETO <span>*</span>
                            </label>

                            <div className="novo-usuario-input-wrapper">
                                <User size={19} />

                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Ex: Carlos Eduardo Silva"
                                    value={nome}
                                    required
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                        </div>

                    </div>


                    {/* E-mail e telefone */}
                    <div className="novo-usuario-grid">

                        <div className="novo-usuario-field">

                            <label htmlFor="email">
                                E-MAIL <span>*</span>
                            </label>

                            <div className="novo-usuario-input-wrapper">
                                <Mail size={19} />

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="carlos.silva@email.com"
                                    value={email}
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                        </div>


                        <div className="novo-usuario-field">

                            <label htmlFor="telefone">
                                TELEFONE <span>*</span>
                            </label>

                            <div className="novo-usuario-input-wrapper">
                                <Phone size={19} />

                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    placeholder=" ex: 11987654321"
                                    minLength={11}
                                    maxLength={11}
                                    required
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ""))}
                                />
                            </div>

                        </div>

                    </div>


                    {/* Status */}
                    <div className="novo-usuario-status">

                        <label className="novo-usuario-status-title">
                            STATUS DA CONTA <span>*</span>
                        </label>

                        <div className="novo-usuario-status-options">

                            <label className="novo-usuario-status-option selecionado">

                                <input
                                    type="radio"
                                    name="status"
                                    checked={status === "ativo"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />

                                <span className="novo-usuario-radio"></span>

                                <span className="novo-usuario-status-dot ativo"></span>

                                <span>Ativo</span>

                            </label>


                            {/* <label className="novo-usuario-status-option">

                                <input
                                    type="radio"
                                    name="status"
                                    value="inativo"
                                    checked={status === "inativo"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />

                                <span className="novo-usuario-radio"></span>

                                <span className="novo-usuario-status-dot inativo"></span>

                                <span>Inativo</span>

                            </label> */}

                        </div>

                    </div>


                    <div className="novo-usuario-divider-bottom"></div>


                    {/* Botões */}
                    <div className="novo-usuario-actions">

                        <button
                            type="button"
                            className="novo-usuario-cancelar"
                            onClick={() => navigate("/usuarios")}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="novo-usuario-salvar"
                        >
                            <CheckCircle size={18} />
                            Salvar Atualizações
                        </button>

                    </div>

                </form>
                {mensagem && <p>{mensagem}</p>}

            </div>

        </div>
    );
}

export default EditarUser;

