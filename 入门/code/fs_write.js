const fs = require('fs')

const content = '一些内容'

// 写入到文件
// 异步
fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //文件写入成功。
})
// 同步
try {
  const data = fs.writeFileSync('/Users/joe/test.txt', content)
  //文件写入成功。
} catch (err) {
  console.error(err)
}
// 指定标志参数更改默认写入行为
fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {})

// 追加到文件
fs.appendFile('file.log', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //完成！
})