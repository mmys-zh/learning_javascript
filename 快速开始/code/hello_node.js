const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello node!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})



// 每当收到新请求时，就会调用request事件，并提供两个对象
    // http.IncomingMessage  --请求对象
    // http.ServerResponse   --响应对象