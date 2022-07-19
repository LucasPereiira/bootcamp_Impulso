const http = require("http");
const host = "http://localhost";
const porta = 3000;

const status = require("./pcRAMUsage.js");


http.createServer((req, res) => {
    let url = req.url;

    if (url === "/status")
    {
        res.end(JSON.stringify(status, null, 2));
    }
    else
    {
    res.end('<h1>Welcome</h1>')
    }
}).listen(porta, () => console.log(`Server is running in ${host}:${porta}`));