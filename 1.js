const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        countAbout++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<a href="/about"> Обо мне <a/>');
        console.log(countAbout);
    }
    if (req.url === '/about') {
        countMain++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<a href="/"> Главная страница <a/>');
        console.log(countMain);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1> Ошибка 404 <h1/>');
    }
});

let countAbout = 0;
let countMain = 0;
const port = '3000';

server.listen(port);

