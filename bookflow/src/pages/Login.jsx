import "./Login.css";


function Login() {
    return (
        <div>
            <img src="" alt="" />
            <h1>Gestão da Biblioteca</h1>
            <p>Informe seus dados para acessar o painel</p>
            <form action="#">
                <label htmlFor="login">E-mail ou Usuário</label>
                <input type="text" name="login" id="login" />

                <label htmlFor="senha">Senha</label>
                <div className="container">
                    <input type="password" name="senha" id="senha"/>
                    <button type="button">👁️</button>
                </div>

                <div>
                    <input id="lembrar" type="checkbox" />
                    <label htmlFor="lembrar">Lembrar meu acesso</label>
                </div>

                <a href="#">Esqueceu a senha?</a>

                <button type="submit">Entrar no Sistemas</button>

                <hr />
                <p>Dificuldades no acesso? Contate a secretaria</p>
                <small>v1.0 - Sistema Escolar</small>
            </form>


        </div>
    );
}

export default Login;