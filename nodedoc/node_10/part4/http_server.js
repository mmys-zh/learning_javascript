var http = require('http');
http.createServer(function (request, response) {
    let data = ""
    request.on("data", function (chunk) {
        data += chunk
    })
    request.on("end", function () {
        let method = request.method
        let url = request.url
        let headers = JSON.stringify(request.headers)
        let httpVersion = request.httpVersion
        response.writeHead(200, {
            "content-type": "text/html"
        })
        let dataHtml = `<p>data: ${data} </p>`
        let methodHtml = `<p>method: ${method} </p>`
        let urlHtml = `<p>url: ${url} </p>`
        let headersHtml = `<p>headers: ${headers} </p>`
        let httpVersionHtml = `<p>httpVersion: ${httpVersion} </p>`
        let resData = dataHtml + methodHtml + urlHtml + headersHtml + httpVersionHtml
        response.end(resData)
    })
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');