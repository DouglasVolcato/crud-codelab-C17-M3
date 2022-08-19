const express = require('express');
const cors = require('cors');
// const routes = require('../src/routes/termo.route');
// const connectToDatabase = require('../src/database/database');
const app = express();

// connectToDatabase();

app.use(express.json());
app.use(cors());
app.get("/", (req,res) => res.send({message: "Hello World"}))
// app.use('/termos', routes);
// app.use('/api-docs', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});
