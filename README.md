
# Number to Word Converter

A JavaScript package to convert numbers to words in various Indian languages.

## Installation

Install the package using npm:

```bash
npm install no_to_word
```

## Usage

Use it in your JavaScript file like this:

```javascript
const m = require("no_to_word");

async function x(n, a) {
  let result = await m.NumTOWord(n, a);
  console.log("ans = " + JSON.stringify(result));
}
```

### Example

Convert the number 34 to Gujarati:

```javascript
let n = 34;
let a = "gu";
x(n, a);
```

Output:
```
ans = "ચોત્રીસ"
```

## Supported Languages

| Language      | Code       |
|---------------|------------|
| English       | `en`       |
| Gujarati      | `gu`       |
| Assamese      | `as`       |
| Bengali       | `bn`       |
| Bhojpuri      | `bho`      |
| Dogri         | `doi`      |
| Hindi         | `hi`       |
| Kannada       | `kn`       |
| Konkani       | `gom`      |
| Maithili      | `mai`      |
| Malayalam     | `ml`       |
| Marathi       | `mr`       |
| Manipuri      | `mni-mtei` |
| Mizo          | `lus`      |
| Odia          | `or`       |
| Punjabi       | `pa`       |
| Sindhi        | `sd`       |
| Tamil         | `ta`       |
| Telugu        | `te`       |

> ✅ The maximum number that can be converted is **999999999**.

---

## API Usage (Test Online) (Try https://node-package.onrender.com/convert/23/gu)

You can also test the package via a hosted API using the following format:

```
GET https://node-package.onrender.com/convert/:number/:language
```

### Example:

```
GET https://node-package.onrender.com/convert/23/gu
```

**Response:**
```json
[
  {
    "translations": [
      {
        "text": "    ત્રેવીસ ",
        "to": "gu"
      }
    ]
  }
]
```

### Error Example:
If you provide an unsupported language:
```json
{
  "error": "Unsupported language code"
}
```

## License

This package is licensed under the **ISC License**.

## Author

**Bhavya Godhaniya**

## Version

**1.0.8**
