// 使用express框架
const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/todos', (req, res) => {
  console.log(req.body.todo)
})

// 使用原生node
// 流的数据块结构
const server = http.createServer((req, res) => {
  // 可以访问 HTTP 请求头
  req.on('data', chunk => {
    console.log(`可用的数据块: ${chunk}`)
  })
  req.on('end', () => {
    //数据结束
  })
})
// 期望字符串数据
const server = http.createServer((req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    JSON.parse(data).todo // '做点事情'
  })
})