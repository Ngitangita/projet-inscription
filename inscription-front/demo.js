const arr = "Tantely Hello worLd 23"
const res = arr.replace("23", "")
.split("")
.map(s => s == s.toLowerCase() ? s.toUpperCase(): s.toLowerCase())
.join('')
.trim()

console.log(res);
