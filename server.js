const http = require("http");

const server = http.createServer((req, res) => {
res.writeHead(200, {
"Content-Type": "text/plain; charset=utf-8"
});

res.end("Baby Assistant Server is Running! 🤖");
});

server.listen(3000, () => {
console.log("Baby Assistant started on port 3000");
});
