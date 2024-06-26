import express from 'express';
const app = express()
import { connect } from './db.js';

app.get("/", async (req, res) => {
    try {
        const connection = await connect();
        const rows = await connection.query("SELECT * FROM cadastro;");
        res.json(rows);
    } catch (error) {
        console.error("Erro", error);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
});

const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});