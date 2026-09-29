import { useNavigate } from "react-router-dom";
import {
    Bell,
    CalendarDays,
    BookOpen,
    RotateCcw,
    Clock3,
    TrendingUp,
    ArrowUpRight,
    Plus,
    FileText,
    UserPlus,
    RefreshCw,
    AlertTriangle
} from "lucide-react";

import "./Inicio.css";

function Inicio() {
    const navigate = useNavigate();


    const livrosMaisEmprestados = [
        {
            titulo: "Dom Casmurro",
            autor: "Machado de Assis",
            vezes: 23
        },
        {
            titulo: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry",
            vezes: 18
        },
        {
            titulo: "1984",
            autor: "George Orwell",
            vezes: 17
        },
        {
            titulo: "A Culpa é das Estrelas",
            autor: "John Green",
            vezes: 15
        },
        {
            titulo: "O Hobbit",
            autor: "J.R.R. Tolkien",
            vezes: 14
        }
    ];

    const atividades = [
        {
            tipo: "emprestimo",
            titulo: "Empréstimo realizado",
            descricao: '"Dom Casmurro" para João Silva',
            horario: "10:15"
        },
        {
            tipo: "devolucao",
            titulo: "Devolução realizada",
            descricao: '"1984" devolvido por Maria Souza',
            horario: "09:42"
        },
        {
            tipo: "reserva",
            titulo: "Reserva criada",
            descricao: '"O Hobbit" reservado por Pedro Lima',
            horario: "09:20"
        },
        {
            tipo: "atraso",
            titulo: "Atraso detectado",
            descricao: '"A Culpa é das Estrelas" está em atraso',
            horario: "Ontem"
        }
    ];

    const meses = [
        { nome: "Dez", valor: 120 },
        { nome: "Jan", valor: 153 },
        { nome: "Fev", valor: 128 },
        { nome: "Mar", valor: 178 },
        { nome: "Abr", valor: 213 },
        { nome: "Mai", valor: 187 }
    ];

    return (
        <main className="inicio">

            {/* CABEÇALHO */}
            <header className="inicio-header">

                <div>
                    <h1>
                        Olá, Administrador! <span>👋</span>
                    </h1>

                    <p>
                        Bem-vindo ao sistema da biblioteca. Aqui está o resumo de hoje.
                    </p>
                </div>

                <div className="header-acoes">

                    <button className="notificacao">
                        <Bell size={24} />

                        <span>3</span>
                    </button>

                    <div className="data-atual">

                        <CalendarDays size={25} />

                        <div>
                            <strong>24 de maio de 2024</strong>
                            <small>Sexta-feira, 10:30</small>
                        </div>

                    </div>

                </div>

            </header>


            {/* CARDS */}
            <section className="cards-resumo">

                <div className="card-resumo">

                    <div className="icone-card azul">
                        <BookOpen size={32} />
                    </div>

                    <div className="card-conteudo">

                        <span>Empréstimos ativos</span>

                        <strong>128</strong>

                        <p className="crescimento">
                            <ArrowUpRight size={16} />
                            12%
                            <span>desde a semana passada</span>
                        </p>

                    </div>

                </div>


                <div className="card-resumo">

                    <div className="icone-card verde">
                        <RotateCcw size={32} />
                    </div>

                    <div className="card-conteudo">

                        <span>Devoluções hoje</span>

                        <strong>18</strong>

                        <p className="crescimento">
                            <ArrowUpRight size={16} />
                            8%
                            <span>desde ontem</span>
                        </p>

                    </div>

                </div>


                <div className="card-resumo">

                    <div className="icone-card amarelo">
                        <Clock3 size={32} />
                    </div>

                    <div className="card-conteudo">

                        <span>Reservas ativas</span>

                        <strong>34</strong>

                        <p className="crescimento">
                            <ArrowUpRight size={16} />
                            5%
                            <span>desde a semana passada</span>
                        </p>

                    </div>

                </div>

            </section>


            {/* CONTEÚDO PRINCIPAL */}
            <section className="inicio-grid">

                {/* GRÁFICO */}
                <div className="painel painel-grafico">

                    <div className="painel-header">

                        <h2>Empréstimos por mês</h2>

                        <button className="select-periodo">
                            Últimos 6 meses
                            <span>⌄</span>
                        </button>

                    </div>


                    <div className="grafico">

                        <div className="eixo-y">
                            <span>250</span>
                            <span>200</span>
                            <span>150</span>
                            <span>100</span>
                            <span>50</span>
                            <span>0</span>
                        </div>

                        <div className="grafico-area">

                            <div className="linhas-grafico">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="barras">

                                {meses.map((mes) => (

                                    <div className="barra-item" key={mes.nome}>

                                        <div
                                            className="barra"
                                            style={{
                                                height: `${(mes.valor / 250) * 100}%`
                                            }}
                                        ></div>

                                        <span>{mes.nome}</span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>


                    <div className="media-grafico">

                        <TrendingUp size={20} />

                        <span>
                            Média de <strong>165 empréstimos</strong> por mês no último período.
                        </span>

                    </div>

                </div>


                {/* LIVROS MAIS EMPRESTADOS */}
                <div className="painel livros-painel">

                    <div className="painel-header">

                        <h2>Livros mais emprestados</h2>

                        <button className="botao-link">
                            Ver todos
                        </button>

                    </div>


                    <div className="lista-livros">

                        {livrosMaisEmprestados.map((livro, index) => (

                            <div className="livro-item" key={livro.titulo}>

                                <div className="numero-livro">
                                    {index + 1}
                                </div>

                                <div className="capa-livro">
                                    <BookOpen size={24} />
                                </div>

                                <div className="livro-info">

                                    <strong>{livro.titulo}</strong>

                                    <span>{livro.autor}</span>

                                </div>

                                <div className="quantidade-livro">

                                    <strong>{livro.vezes}</strong>

                                    <span>vezes</span>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* ATIVIDADES */}
                <div className="painel atividades-painel">

                    <div className="painel-header">

                        <h2>Atividades recentes</h2>

                        <button className="botao-link">
                            Ver todas
                        </button>

                    </div>


                    <div className="lista-atividades">

                        {atividades.map((atividade, index) => {

                            let Icone = RefreshCw;

                            if (atividade.tipo === "emprestimo") {
                                Icone = RotateCcw;
                            }

                            if (atividade.tipo === "reserva") {
                                Icone = Clock3;
                            }

                            if (atividade.tipo === "atraso") {
                                Icone = AlertTriangle;
                            }

                            return (

                                <div className="atividade-item" key={index}>

                                    <div className={`icone-atividade ${atividade.tipo}`}>
                                        <Icone size={20} />
                                    </div>

                                    <div className="atividade-info">

                                        <strong>{atividade.titulo}</strong>

                                        <span>{atividade.descricao}</span>

                                    </div>

                                    <time>
                                        {atividade.horario}
                                    </time>

                                </div>

                            );
                        })}

                    </div>

                </div>

            </section>


            {/* AÇÕES RÁPIDAS */}
            <section className="acoes-rapidas">

                <h2>Ações rápidas</h2>

                <div className="acoes-grid">

                    <button className="acao-card"
                        onClick={() => navigate("/usuario/emprestimos/novo")}>

                        <div className="acao-icone azul">
                            <Plus size={25} />
                        </div>

                        <span>Novo empréstimo</span>

                    </button>


                    <button className="acao-card"
                        onClick={() => navigate("/usuario/#")}>

                        <div className="acao-icone verde">
                            <RefreshCw size={25} />
                        </div>

                        <span>Registrar devolução</span>

                    </button>


                    <button className="acao-card"
                        onClick={() => navigate("/usuario/emprestimos/novo")}>

                        <div className="acao-icone roxo">
                            <BookOpen size={25} />
                        </div>

                        <span>Cadastrar livro</span>

                    </button>


                    <button className="acao-card"
                        onClick={() => navigate("/usuario/novousuario")}>

                        <div className="acao-icone laranja">
                            <UserPlus size={25} />
                        </div>

                        <span>Cadastrar usuário</span>

                    </button>


                    <button className="acao-card"
                        onClick={() => navigate("/usuario/relatorios")}>

                        <div className="acao-icone ciano">
                            <FileText size={25} />
                        </div>

                        <span>Ver relatórios</span>

                    </button>

            </div>

        </section>

        </main >
    );
}

export default Inicio;