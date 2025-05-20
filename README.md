<<<<<<< HEAD
Number to Word Converter

A JavaScript package to convert numbers to words in various languages.

Installation

To install this package, run the following command:

bash

npm install no_to_word
Usage

To use this package, require it in your JavaScript file:

javascript


const m = require("no_to_word");
Then, call the NumTOWord function with the number and language as arguments:


async function x(n, a) {
  let result = await m.NumTOWord(n, a);
  console.log("ans = " + JSON.stringify(result));
}
Example

Convert the number 34 to words in Gujarati:

javascript

Verify

let n = 34;
let a = "gu";
x(n, a);
This will output:

ans = "ચોત્રીસ"
Language Support

This package uses the Microsoft Translate API to translate the words to the desired language. Currently, it supports translations to the following languages:

English (en)
Gujarati (gu)
Assamese (as)
Bengali (bn)
Bhojpuri (bho)
Dogri (doi)
Hindi (hi)
Kannada (kn)
Konkani (gom)
Maithili (mai)
Malyalam (ml)
Marathi (mr)
Manipuri (mni-mtei)
Mizo (lus)
Odia (or)
Punjabi (pa)
Sanskrit (sa)
Sindhi (sd)
Tamil (ta)
Telugu (te)
Limitation

The maximum number that can be translated is 999999999.

License

This package is licensed under the ISC License.

Author

Bhavya Godhaniya

Version

1.0.8




=======
# Node-Package
>>>>>>> 38ea0162a570cf25b3c3bcab3e1812a05199c577
