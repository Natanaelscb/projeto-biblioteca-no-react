
const emprestimo = require('../services/emprestimoServices')

exports.listar = async(req,res) => {

    try {
        const emprestimos = await emprestimo.buscarTodos();
        res.json(emprestimos);
        console.log(emprestimos);

    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar Emprestimo' })
    }
};

