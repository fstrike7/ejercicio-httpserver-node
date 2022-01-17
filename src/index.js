const http = require('http');

const juani = {
    id: 0,
    name: "Juani",
    surname: "Gallo"
}

const goncy = {
    id: 1,
    name: "Gonzalo",
    surname: "Pozzo"
} 

const faus = {
    id: 2,
    name: "Faustino",
    surname: "Beatrice"
}

const users = [juani, goncy, faus]

const requestListener = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    if (req.url == "/ping"){
        res.writeHead(200)
        res.end('pong')
    } else if (req.url.slice(0,10) == "/api/users"){
        res.writeHead(200)
        const id = req.url.split('/')[3];
        let stringifiedUsers;
        if (id !== undefined) {
            const filteredUsers = users.filter((el) => el.id == id)
            stringifiedUsers = JSON.stringify(filteredUsers)
        } else {
            stringifiedUsers = JSON.stringify(users)
        }
        res.end(stringifiedUsers)
    }
        else {
        res.writeHead(404);
        res.end("Ruta no encontrada")
    }
}

const server = http.createServer(requestListener);
const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
    console.log(`Server corriendo en ${host}:${port}`)
})