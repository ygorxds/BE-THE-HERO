const express = require('express');
const cors = require('cors')
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

try {
  app.listen(3333);
  console.log("SERVIDOR RODANDO NA PORTA 3333")

} catch {
  console.log("ERRO")

}