const fs = require('fs')
// 异步
fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
  //fd is our file descriptor
})
// 同步
try {
  const fd = fs.openSync('/Users/joe/test.txt', 'r')
} catch (err) {
  console.error(err)
}