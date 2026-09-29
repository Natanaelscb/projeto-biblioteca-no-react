const prisma = require('../../prisma');
exports.buscarTodos = async ()=>{
    const usuarios = await prisma.usuario.findMany();

    return usuarios;
}
exports.buscarPorId = async (id) => {

    const usuario = await prisma.usuario.findUnique({
        where: {id}

    });
    console.log("USUARIO DO BANCO:", usuario);

    if(!usuario){
        throw new Error ("Usuário não encontrado")
    }
    return usuario;

};

exports.criar = async (matricula, nome, email, telefone, status) => {
    const novoUsuario = await prisma.usuario.create({
        data: {
            matricula: matricula,
            nome: nome,
            email: email,
            telefone: telefone,
            status: status
        }
        

    });
    return novoUsuario;

};
exports.atualizar = async (id, matricula, nome, email, telefone, status) => {
    try {
        const usuarioAtualizado = await prisma.usuario.update({
            where: { id },
            data: {
                matricula,
                nome,
                email,
                telefone,
                status
            },
            select: {
                id: true,
                matricula: true,
                nome: true,
                email: true,
                telefone: true,
                status: true
            }
        });
        return usuarioAtualizado;
    } catch (error) {
        if (error.code === 'P2025') {
            throw new Error('Usuário não encontrado');
        }
        if (error.code === 'P2002') {
            throw new Error('Matrícula ou email já cadastrado');
        }
        throw error;
    }
};
exports.deletar = async(id)=>{
    const usuarioDeletado = await prisma.usuario.delete({
        where:{
            id:id
        }
    });
    return usuarioDeletado
}


