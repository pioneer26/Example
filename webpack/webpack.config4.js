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
        filename:'[name].js'
    },
    plugins:[
        new HWP({
            template:'./webpack.html',
            chunks:['cc'],
            filename:'index.html'
        }),
        new HWP({
            template:'./webpack1.html',
            chunks:['ee'],
            filename:'index2.html'
        })
    ]
}