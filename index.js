const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors( {origin: '*', } ));
dotenv.config();

const climaRoutes = require('./src/routes/climaRoutes');
app.use('/clima', climaRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});