const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:['./c.js'],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'mm.js'
    },
    plugins:[
        new HWP({
            template:'webpack.html'
        })
    ]
}
