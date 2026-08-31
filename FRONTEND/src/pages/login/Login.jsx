
import "./Login.css";

function Login() {
    return (
        <div className="login-container" onSubmit={() => {
            return navigator("/Inicio");
        }}>
            <div className="login-box">

                <h1>Gestão da Biblioteca</h1>

                <p>Informe seus dados para acessar o painel</p>

                <form>
                    <label htmlFor="login">
                        E-mail ou Usuário
                    </label>

                    <input
                        type="text"
                        id="login"
                        placeholder="Digite seu e-mail ou usuário"
                    />

                    <label htmlFor="senha">
                        Senha
                    </label>

                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua senha"
                    />

                    <div className="remember">
                        <input type="checkbox" id="lembrar" />
                        <label htmlFor="lembrar">
                            Lembrar meu acesso
                        </label>
                    </div>

                    <a href="#">
                        Esqueceu a senha?
                    </a>

                    <button type="submit">
                        Entrar no Sistema
                    </button>
                </form>

                <hr />

                <small>
                    Dificuldades no acesso? Contate a secretaria
                </small>

                <small>
                    v1.0 - Sistema Escolar
                </small>

            </div>
        </div>
    );
}

export default Login;