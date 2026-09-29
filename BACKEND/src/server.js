const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const usuarioRoutes = require('./routes/usuarioRoutes')
app.use('/novoUser',usuarioRoutes)

const emprestimoRoutes = require('./routes/emprestimoRoutes')
app.use('/emprestimos',emprestimoRoutes)

const livrosRoutes = require('./routes/livrosRoutes')
app.use('/livros',livrosRoutes)


app.listen(3001, () => {
    console.log("Server rodando na porta 3001");
});
