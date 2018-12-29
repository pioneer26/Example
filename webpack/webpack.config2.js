const path = require('path');
const HWP = require('html-webpack-plugin');//引入html-webpack-plugin包
module.exports = {
    mode:'development',//要配置mode:development 开发依赖 mode:production 生产依赖
    entry:{
        //入口文件,解析某个（些）指定的文件，最终编译成我们浏览器可以使用的文件
        c:'./c.js'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'lbj.js'
    },
    //plugin可以自动生成html文件
   plugins:[
        new HWP({
            filename:'index.html',//编译后的html文件名
            template:'webpack.html'//本地的模板文件
        })
   ]
}