const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { NumTOWord } = require('./index.js');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/convert/:number/:language', async (req, res) => {
    
    const { number, language } = req.params;
    try {
        const result = await NumTOWord(number, language);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(port, () => {    
    console.log(`Server is running at http://localhost:${port}`);
});