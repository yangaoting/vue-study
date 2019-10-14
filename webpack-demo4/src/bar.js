//node.js
// module.exports = function(){
//     console.log('bar module');
// }
// export default function(){
//     console.log('haha');
// }

export default {
    name:'object haha'
}

// exports.x = 'xxxx'
// exports.y = 'yyyy'

export const x = 'xxx'
export const y = 'yyy'

export function add(a,b){
    return a + b
}

//错误示例
// export z = 'zzzz'
// export 'wwww'
// export function(){}