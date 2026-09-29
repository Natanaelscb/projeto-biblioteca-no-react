const usuario = require('../services/usuarioServices')

exports.listar = async (req, res) => {
    try {
        const usuarios = await usuario.buscarTodos();
        res.json(usuarios);
        console.log(req.body);

    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar Usuarios' })
    }
};
exports.buscarPorId = async (req, res) => {

    try {
        const { id } = req.params;

        const usuarioEncontrado = await usuario.buscarPorId(Number(id));

        res.status(200).json(usuarioEncontrado);

    } catch (erro) {
        console.error(erro);

        if (erro.message === "Usuário não encontrado") {
            return res.status(404).json({
                erro: "Usuário não encontrado"
            });
        }

        res.status(500).json({
            erro: "Erro ao buscar usuário"
        });
    }
};



exports.criar = async (req, res) => {
    try {
        const { matricula, nome, email, telefone, status } = req.body;
        console.log("DADOS RECEBIDOS:");

        const novoUsuario = await usuario.criar(
            matricula,
            nome,
            email,
            telefone,
            status
        );
        res.status(201).json(novoUsuario)

    } catch (erro) {
        console.log(erro);
        res.status(500).json({
            erro: 'Erro ao criar Usuarios'
        })
    }
};

exports.atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { matricula, nome, email, telefone, status } = req.body

        const usuarioAtualizado = await usuario.atualizar(
            Number(id),
            matricula,
            nome,
            email,
            telefone,
            status
        );
        res.status(200).json(usuarioAtualizado)
    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            mensagem: "Erro ao atualizar"
        })
    }
}
exports.deletar = async (req,res) => {
    try {
        const { id } = req.params;

        const usuarioDeletado = await usuario.deletar(Number(id));
        res.status(200).json(usuarioDeletado);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: "Erro ao excluir usuário"

        })
    }
}

