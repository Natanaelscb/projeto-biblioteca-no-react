const prisma = require('../../prisma');
exports.buscarTodos = async () => {
    const livros = await prisma.livro.findMany();

    return livros;
}

exports.criar = async (titulo, autor, isbn, categoria, anoPublicado, quantidade, quantidadeDisponivel) => {
    const novoLivro = await prisma.livro.create({
        data: {
            titulo: titulo,
            autor: autor,
            isbn: isbn,
            categoria: categoria,
            anoPublicado: anoPublicado,
            quantidade: quantidade,
            quantidadeDisponivel: quantidadeDisponivel
        }


    });
    return novoLivro;

};