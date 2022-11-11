const url = require("url")

let parseUrl = "https://www.google.com/?q=node.js"

let urlObj = url.parse(parseUrl)
console.log(urlObj);

let urlAdress = url.format(urlObj)
console.log(urlAdress)

urlAdress = url.resolve("https://www.google.com", "/image")
console.log(urlAdress);

/** WHATWG URL API */
const { URL } = require("url")
const myWHATWGURL = new URL(parseUrl)
console.log(myWHATWGURL);ff

/* querystring模块 - 查询字符串处理 */
const querystring = require("querystring")
let str = "keyWrod=node.js&name=huruji"
let obj = querystring.parse(str)
console.log("querytring", obj)

let objstr = {
    keyWord: "node.js",
    name: "huruji"
}
let strObj = querystring.stringify(objstr)
console.log("querystring", strObj);