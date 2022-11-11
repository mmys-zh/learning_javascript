/** 实用工具及功能 */
const util = require("util")

let obj = {
    keyWord: "nodejs",
    version: "10"
}

let str = util.inspect(obj, {"colors":true})

console.log(str);

console.log(util.types.isStringObject("foo"));
console.log(util.types.isStringObject(new String("foo")))
console.log(util.types.isAnyArrayBuffer(new ArrayBuffer()));