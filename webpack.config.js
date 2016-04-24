var path=require('path');
var webpack=require('webpack');

module.exports={
    output:{
        filename:'bundle.js'
    },
    entry:[
        './src/index.js'
    ],
    module:{
        loaders:[
            {
                test:'/\.jsx?$/',
                loader:'babel',
                exclude: /node_modules/,
                query:{
                    plugins:['transform-runtime'],
                    presets:['react','es2015']
                }
            }
        ]
    }
};