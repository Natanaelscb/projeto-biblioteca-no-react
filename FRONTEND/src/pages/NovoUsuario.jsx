import {
    Hash,
    User,
    Mail,
    Phone,
    Users,
    CheckCircle,
    ChevronRight,
} from "lucide-react";

import "./NovoUsuario.css";

function NovoUsuario() {
    return (
        <div className="novo-usuario-page">

            {/* Cabeçalho */}
            <div className="novo-usuario-header">

                <div>
                    <h1>Novo Usuário</h1>

                    <div className="novo-usuario-breadcrumb">
                        <button type="button">
                            Usuários
                        </button>

                        <ChevronRight size={16} />

                        <span>Novo Usuário</span>
                    </div>
                </div>
            </div>


            {/* Card principal */}
            <div className="novo-usuario-card">

                <div className="novo-usuario-card-header">
                    <h2>Informações do Usuário</h2>

                    <p>
                        Preencha os campos abaixo com as informações do novo integrante
                        da biblioteca.
                    </p>
                </div>


                <div className="novo-usuario-divider"></div>


                {/* Formulário visual */}
                <form>

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
                                    placeholder="(11) 98765-4321"
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
                                    value="ativo"
                                    defaultChecked
                                />

                                <span className="novo-usuario-radio"></span>

                                <span className="novo-usuario-status-dot ativo"></span>

                                <span>Ativo</span>

                            </label>


                            <label className="novo-usuario-status-option">

                                <input
                                    type="radio"
                                    name="status"
                                    value="inativo"
                                />

                                <span className="novo-usuario-radio"></span>

                                <span className="novo-usuario-status-dot inativo"></span>

                                <span>Inativo</span>

                            </label>

                        </div>

                    </div>


                    <div className="novo-usuario-divider-bottom"></div>


                    {/* Botões */}
                    <div className="novo-usuario-actions">

                        <button
                            type="button"
                            className="novo-usuario-cancelar"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="novo-usuario-salvar"
                        >
                            <CheckCircle size={18} />
                            Salvar Usuário
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default NovoUsuario;

