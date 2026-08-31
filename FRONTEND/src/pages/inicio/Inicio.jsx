import "./Inicio.css";
function Inicio() {
    return (
        <div className="inicio-container">
            <div className="inicio-box">

                <section>
                    <h1>Olá, Administrador!</h1>
                    <h6>
                        Bem-vindo ao Sistema da Biblioteca. Aqui está o resumo de hoje.
                    </h6>
                </section>

                <div className="cards">

                    <div className="card">
                        <div className="card-texto">
                            <h3>Empréstimos ativos</h3>
                            <p className="numero">128</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-texto">
                            <h3>Devoluções</h3>
                            <p className="numero">18</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-texto">
                            <h3>Reservas ativas</h3>
                            <p className="numero">34</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-texto">
                            <h3>Atrasos</h3>
                            <p className="numero">4</p>
                        </div>
                    </div>

                </div>

                <div className="cards2">

                    <div className="dashboard">
                        <h2>Empréstimos por mês</h2>
                    </div>

                    <div className="livros-emprestados">
                        <h2>Livros mais emprestados</h2>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Inicio;