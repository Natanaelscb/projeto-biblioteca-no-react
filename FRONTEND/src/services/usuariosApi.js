export async function buscarUsuarios() {
    const resposta = await fetch("http://localhost:3001/novoUser");

    const dados = await resposta.json();

    return dados;

}
export async function criarUsuario(usuario) {
    const resposta = await fetch("http://localhost:3001/novoUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    });
    if (!resposta.ok) {
        throw new Error("Erro ao cadastrar usuário");

    }
    const dados = await resposta.json();
    return dados;
}
export async function buscarUsuario(id) {

    const resposta = await fetch(`http://localhost:3001/novoUser/${id}`);
    if (!resposta.ok) {
        throw new Error("Erro ao buscar usuário")
        
    }
    const dados = await resposta.json();
    return dados;

}
export async function atualizarUsuario(id,usuario) {
    const resposta = await fetch(`http://localhost:3001/novoUser/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    });
    if (!resposta.ok) {
        throw new Error("Erro ao atualizar usuário");

    }
    const dados = await resposta.json();

    return dados;

    
}
export async function deletarUsuario(id,usuario) {
    const resposta = await fetch(`http://localhost:3001/novoUser/${id}`, {
        method: "DELETE",
    });
    if (!resposta.ok) {
        throw new Error("Erro ao deletar usuário");

    }
    const dados = await resposta.json();

    return dados;

    
}
