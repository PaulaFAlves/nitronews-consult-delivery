const http = require("http");
const express = require("express");
const app = express();
const data = require('./data/dados.json')
const cors = require("cors")

app.use(cors())

app.get("/", function(req, res) {
    res.send(data);
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));