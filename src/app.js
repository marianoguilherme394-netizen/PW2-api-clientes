const express = require("express");
const clienteRoutes = require("./routes/clienteRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//rota raiz
app.get("/", (req,res) => {
    res.json({
        mensagem: "Api de clientes",
        versao:"1.0.0",
        endpoints:{
            listarTodos: "GET /clientes",
            buscarPorId: "GET /clientes/:id"
        }
    })
})