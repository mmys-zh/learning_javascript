"use strict"

const http2 = require("http2")
const fs = require("fs")

const client = http2.connect("https//localhost:8443", {
    ca: fs.readFileSync("./ssl/localhost-cert.pem")
})

client.on("error", err => console.error(err))

const request = client.request({ ":path": '/' })

request.setEncoding("utf8")

let data

request.on("data", chunk => {
    data += chunk
})

request.on("end", () => {
    console.log("\n" + data);
    client.close()
})

request.end()