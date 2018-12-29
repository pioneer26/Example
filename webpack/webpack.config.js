const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        cc:'./c.js',
        ee:'./e.js'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].[hash:5].js'
    },
    plugins:[
        new HWP({
           template:'./webpack.html',
           chunks:['cc','ee'],
           filename:'index.html',
           minify:{
            removeAttributeQuotes:true,//去掉属性的引号
            collapseWhitespace:true //html压缩一行
           }
        })
    ]
}