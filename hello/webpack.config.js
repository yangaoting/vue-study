const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry:   path.join(__dirname,'src/index.js'),
    output: {
        filename: 'bundle.js',
        path:path.join(__dirname,'dist')
    } ,
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name]-ygt.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}