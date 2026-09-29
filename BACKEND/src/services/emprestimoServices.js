const prisma = require('../../prisma');
exports.buscarTodos = async ()=>{
    const emprestimo = await prisma.emprestimo.findMany();

    return emprestimo;
}
