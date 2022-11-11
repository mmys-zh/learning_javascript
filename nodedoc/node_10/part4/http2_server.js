"use strict"

const http2 = require("http2")
const fs = require("fs")

const server = http2.createSecureServer({
    key: fs.readFileSync("./ssl/localhost-pivkey.pem"),
    cert: fs.readFileSync("./ssl/localhost-cert.pem")
})

server.on("error", err => console.error(err))

server.on("stream", (stream, headers) => {
    // stream is a Duplex
    stream.respond({
        "content-type": "text/html",
        "status": 200
    })
    stream.end("<h1>Hello HTTP2</h1>")
})

server.listen(8443)