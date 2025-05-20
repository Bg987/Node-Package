const express = require('express');
const cors = require('cors');
const { NumTOWord } = require('./index.js');
const app = express();
const port = 3000;
app.use(cors());
app.get('/convert/:number/:language', async (req, res) => {

    const { number, language } = req.params;
    if(!number || !language) {
        return res.status(400).json({ error: 'Number and language are required.' });
    }
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