const express = require("express");
const cors = require("cors");
const prisma = require("../prisma");

const app = express();

app.use(express.json());

app.use(cors());

const usuarioRoutes = require('./routes/usuarioRoutes')
app.use('/novoUser',usuarioRoutes)

/*app.get("/usuarios", async (req,res) => {
    const usuarios = await prisma.usuario.findMany()
    res.json(usuarios);
})

app.post("/usuarios", async (req,res) => {
    const {nome, matricula, email} = req.body;
    const usuario = await prisma.usuario.create({
        data:(
            nome,
            matricula,
            email
        )
    })
    res.json(usuario);

});
*/


app.listen(3001, () => {
    console.log("Server rodando na porta 3000");
});
