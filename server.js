const express = require('express');
const cors = require('cors');
const { NumTOWord } = require('./index.js');
const app = express();
const port = 3000;
app.use(cors());
const supportedCodes = [
    "en", "gu", "as", "bn", "bho", "doi", "hi", "kn", "gom", "mai",
    "ml", "mr", "mni-mtei", "lus", "or", "pa", "sd", "ta", "te"
];

app.get('/convert/:number/:language', async (req, res) => {

    const { number, language } = req.params;
    if (number > 999999999) {
        return res.status(400).json({ error: 'Number must be less than 999999999.' });
    }
    if (!supportedCodes.includes(language)) {
        return res.status(400).json({ error: 'Unsupported language code' });
    }
    try {
        const result = await NumTOWord(number, language);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Number to Word API! Use /convert/:number/:language to convert numbers.', accepted: [
            { "number": "must be less than 999999999" },
            { "language": "English", "code": "en" },
            { "language": "Gujarati", "code": "gu" },
            { "language": "Assamese", "code": "as" },
            { "language": "Bengali", "code": "bn" },
            { "language": "Bhojpuri", "code": "bho" },
            { "language": "Dogri", "code": "doi" },
            { "language": "Hindi", "code": "hi" },
            { "language": "Kannada", "code": "kn" },
            { "language": "Konkani", "code": "gom" },
            { "language": "Maithili", "code": "mai" },
            { "language": "Malayalam", "code": "ml" },
            { "language": "Marathi", "code": "mr" },
            { "language": "Manipuri", "code": "mni-mtei" },
            { "language": "Mizo", "code": "lus" },
            { "language": "Odia", "code": "or" },
            { "language": "Punjabi", "code": "pa" },
            { "language": "Sanskrit", "code": "sa" },
            { "language": "Sindhi", "code": "sd" },
            { "language": "Tamil", "code": "ta" },
            { "language": "Telugu", "code": "te" }
        ]
    });
})
app.listen(port, () => {
    console.log(`Server is running`);
});