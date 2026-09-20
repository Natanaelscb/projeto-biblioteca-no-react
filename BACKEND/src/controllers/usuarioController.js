const usuario = require('../services/usuarioServices')

exports.listar = async (req , res)=> {
    try {
        const usuarios = await usuario.buscarTodos();
        res.json(usuarios);
    } catch (erro) {
        res.status(500).json({erro:'Erro ao buscar Usuarios'})
    }
};

exports.criar = async (req, res) =>{
    try {
        const { matricula, nome , email, telefone, status} = req.body;
        const novoUsuario = await usuario.criar(matricula, nome , email, telefone, status);
        res.status(200).json(novoUsuario)
    } catch (erro) {
        res.status(500).json({erro:'Erro ao criar Usuarios'})
    }
};
module.exports = usuario