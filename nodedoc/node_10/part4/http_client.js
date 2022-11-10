const http = require('http')
let requestData = ""
// http.request({
//     "host": "127.0.0.1",
//     "port": "8081",
//     "method": "get"
// }, function(res) {
//     res.on("data", function(chunk) {
//         requestData += chunk
//     })
//     res.on('end', function() {
//         console.log(requestData);
//     })
// }).end()

let option = {
    "host": "127.0.0.1",
    "port": "8081"
}

const request = http.request(option)

request.on("response", function(res) {
    res.on("data", function(chunk) {
        requestData += chunk
    })
    res.on("end", function() {
        console.log(requestData);
    })
})

request.end()