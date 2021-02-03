// 初始化
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// 创建start事件
eventEmitter.on('start', () => {
  console.log('started')
})
// 触发start事件
eventEmitter.emit('start')

// 带参数
eventEmitter.on('start', number => {
  console.log(`started ${number}`)
})

eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`)
})
// 携带参数触发
eventEmitter.emit('start', 23)

eventEmitter.emit('start', 1, 100)