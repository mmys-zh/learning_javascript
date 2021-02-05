// 创建流对象
const Stream = require('stream')
const writableStream = new Stream.Writable()


// 初始化并实现_write()
writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

// 使用
process.stdin.pipe(writableStream)