// 使用可写流获取数据
const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

// 使用 readable 事件直接地消费可读流
readableStream.on('readable', () => {
  console.log(readableStream.read())
})