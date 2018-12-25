const path = require('path');//引入路径包
module.exports = {
    /*
    webpack4.0需要配置依赖:
        开发依赖->mode:'development'
        生产依赖->mode:'production'
    */
    mode:'development',//配置开发依赖
    entry:'./c.js',//入口文件，目的是为了解析某些指定文件，最终编译成能够在浏览器运行的文件
    output:{//出口文件（取个名字放在build文件夹下面）
        path:path.resolve(__dirname,'build'),//指定打包后的文件夹
        filename:'c.js'//指定文件名字
    }
}