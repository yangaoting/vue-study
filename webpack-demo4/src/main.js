// var bar = require('./bar')

// import bar from './bar'

// bar()

// console.log(bar)

//通过解构赋值导入非默认 按需导入
import {x,y,add} from './bar'
console.log(x,y,add(10,20))

//导入所有成员包括默认成员
import * as bar2 from './bar'
console.log(bar2,bar2.default.name)