module.exports = {
    //publicPath:'/demo2', //发布的路径
    devServer:{
        port:8001,
        host:"localhost",
        https:false,//https协议配置
        open:true//自动打开浏览器
    },
    lintOnSave:false,//保存文件时，忽略提醒
    outputDir:"dist",//打包目录
    assetsDir:"",//静态文件打包目录，相对于outputDir
    indexPath:"index.html",//index页面打包目录，相对于outputDir
    productionSourceMap:false,//打包时不生成.map文件
    filenameHashing:true//打包之后，静态文件名生成hash值
}