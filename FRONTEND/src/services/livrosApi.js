export async function buscarLivros() {
    const resposta = await fetch("http://localhost:3001/livros");

    const dados = await resposta.json();

    return dados;
    
}