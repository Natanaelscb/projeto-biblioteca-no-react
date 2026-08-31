import "./Emprestimos.css"
import { useNavigate } from "react-router-dom";
function Emprestimos() {
    const navigate =useNavigate()
    return (
        <div className="emprestimos-container">
            <header className="topbar">
                <div className="menu">

                </div>
                <div className="topbar-search">


                </div>
                <div className="topbar-user">


                </div>

            </header>
            <div className="page-content">
                <div className="page-header">
                    <div>
                        <h1>Empréstimos</h1>
                        <div className="breadcrumb">
                            <span>Inicio</span>
                            <span> ›</span>
                            <span>Empréstimos</span>

                        </div>
                    </div>
                    <div>
                        <button onClick={()=> navigate('/emprestimos/novo')}>Novo Empréstimo</button>
                    </div>

                </div>
                <div className="loans-card">
                    <div className="loans-toolbar">

                        <div className="loans-search">

                        </div>
                        <div className="loans-actions">

                        </div>


                    </div>
                    <div className="tabela-emprestimos">
                        <table>
                            <thead>
                                <tr>
                                    <th> Usuário</th>
                                    <th>Livro</th>
                                    <th>Data Empréstimo</th>
                                    <th>Devolução</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>

                            </thead>
                            <tbody>

                            </tbody>
                        </table>

                    </div>

                </div>

            </div>


        </div>

    );
}
export default Emprestimos;