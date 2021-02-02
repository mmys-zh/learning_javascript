const car = {
  brand: 'Ford',
  model: 'Fiesta'
}
// 第一种方法：将对象分配给 module.exports
module.exports = car
// 第二种方法：将对象作为属性添加到 exports上
exports.car = car