const path = require('path')

module.exports = {
    mode:'none',//development,none
    //入口
    entry:'./src/main.js',
    //出口
    output:{
        path:path.join(__dirname,'./dist/'),
        filename:'bundle.js'
    }
}