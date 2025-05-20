module.exports.NumTOWord = async function (number, language) {
    const { translate } = require('microsoft-translate-api');
    const a = require("./base.js");
    let y = (a.x(number)).reverse();
    let str = "";
    for (let i = 0; i < y.length; i++) {
        if (y[i] != null) {
            str += y[i];
            str += ' ';
        }
    }
    let translation = await translate(str, 'en', language);
    return translation;
}