import express from 'express';

const app = express();

/**
 * GET - buscas
 * POST - criação
 * PUT - alteração
 * DELETE - deletar
 * PATCH - alterar informação específica
 */

app.get("/", (req, res) => {
    return res.json({
        message: "fala meu chapinha"
    });
});

app.post("/users", (req, res) => {
    return res.json({
        message: "user left your channel!"
    });
});

app.listen(3333, () => console.log("ta rodando de boa"));