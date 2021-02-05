// 创建流对象
const Stream = require('stream')
const readableStream = new Stream.Readable()


// 初始化并实现_read()
// 方式一
readableStream._read = () => {}
// 方式二
const readableStream = new Stream.Readable({
  read() {}
})


// 使用
readableStream.push('hi!')
readableStream.push('ho!')