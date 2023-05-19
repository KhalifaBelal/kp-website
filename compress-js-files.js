const { execSync } = require("child_process");
const terser = require("terser");
const fs = require("fs");

const inputCode = fs.readFileSync(".next/static/chunks/main.js", "utf8");
const compressedCode = terser.minify(inputCode);
fs.writeFileSync(".next/static/chunks/main.js", compressedCode.code);
console.log(`Successfully compressed ${".next/static/chunks/main.js"}`);
