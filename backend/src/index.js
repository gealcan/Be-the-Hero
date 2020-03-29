const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//METODOS HTTP
// GET(buscar uma info do back end) é um metodo HTTp
// POST( criar uma info no back end)
//PUT (alterar uma informação do back end)
// Delete(deletar uma info do back end)

//insomnia consegue criar requisiçoes utilizando qualquer metodo HTTP

// vou mandar a aplicação ouvir a porta 3333
// vai aparecer mesagem de erro "connot GET /" que dizer que não criamos nenhuma rota para nossa aplicação
// aplicação existe , mas n tem nennuma funcionalidade
