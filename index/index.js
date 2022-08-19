const express = require('express');
const cors = require('cors');
const routes = require('../src/routes/termo.route');
const connectToDatabase = require('../src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.get("/", (req,res) => res.send({message: "Hello World"}))
app.use('/termos', routes);
app.use('/api-docs', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
