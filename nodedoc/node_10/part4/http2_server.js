"use strict"

const http2 = require("http2")
const fs = require("fs")

const server = http2.createSecureServer({
    key: fs.readFileSync("./ssl/localhost-pivkey.pem"),
    cert: fs.readFileSync("./ssl/localhost-cert.pem")
})

server.listen(8443)