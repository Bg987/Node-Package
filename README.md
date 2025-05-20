# 📦 Number to Word Converter

A lightweight JavaScript package to convert numbers into words in various Indian languages using Microsoft Translate API.

[![npm version](https://img.shields.io/npm/v/no_to_word)](https://www.npmjs.com/package/no_to_word)
[![license](https://img.shields.io/npm/l/no_to_word)](./LICENSE)

---

## 🚀 Installation

Install the package using npm:

```bash
npm install no_to_word
```

---

## 📖 Usage

Require the package and use the `NumTOWord` function:

```javascript
const m = require("no_to_word");

async function converter(n, a) {
  const result = await m.NumTOWord(n, a);
  console.log("ans = " + JSON.stringify(result));
}
```

### 🔍 Example

Convert the number `34` to words in **Gujarati**:

```javascript
let n = 34;
let a = "gu";
converter(n, a);
```

**Output:**

```
ans = "ચોત્રીસ"
```

---

## 🌐 Supported Languages

The following languages are currently supported:

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
| Sanskrit      | `sa`       |
| Sindhi        | `sd`       |
| Tamil         | `ta`       |
| Telugu        | `te`       |

---

## ⚠️ Limitations

- The maximum number that can be converted is: **999,999,999**
- Requires an active internet connection (uses Microsoft Translate API)

---

## 📄 License

This package is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Bhavya Godhaniya**

---

## 📦 Version

**1.0.8**
