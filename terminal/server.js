const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    let filePath;

    if (req.url === "/") {
        filePath = path.join(__dirname, "..", "src", "index.html");
    }

    else if (req.url === "/style.css") {
        filePath = path.join(__dirname, "..", "src", "style.css");
    }

    else if (req.url === "/script.js") {
        filePath = path.join(__dirname, "..", "src", "script.js");
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        res.end(`Não foi possível obter o arquivo ${req.url}`);
        return;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {
            console.error("Erro:", err);

            res.writeHead(500, {
                "Content-Type": "text/plain; charset=utf-8"
            });

            res.end("Erro ao carregar o arquivo.");
            return;
        }

        let contentType = "text/html; charset=utf-8";

        if (req.url === "/style.css") {
            contentType = "text/css; charset=utf-8";
        }

        if (req.url === "/script.js") {
            contentType = "application/javascript; charset=utf-8";
        }

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(data);
    });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});