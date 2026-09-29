const livro = require('../services/livroServices')

exports.listar = async (req, res) => {
    console.log("ENTROU NO BUSCAR")
    try {
        const livros = await livro.buscarTodos();
        res.json(livros);
        console.log(req.body);

    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao buscar Livros' })
    }
};
exports.criar = async (req, res) => {
    try {
        const {titulo,autor,categoria,anoPublicado,quantidade} = req.body;

        const novoLivro = await livro.criar(
            titulo,
            autor,
            categoria,
            anoPublicado,
            quantidade
        );
        res.status(201).json(novoLivro)

    } catch (erro) {
        console.log(erro);
        res.status(500).json({
            erro: 'Erro ao criar Livro'
        })
    }
};