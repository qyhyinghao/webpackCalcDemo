# webpackCalcDemo

## src 为源文件目录


## dist 为webpack打包后的文件


## index.html  


## webpack.config.js为webpack配置文件
```

module.exports = {
    //入口文件
    entry:'./src/main.js',

    output:{
        //配置输出文件地址
        path:__dirname + '/dist',
        //配置输出文件名
        filename:'build.js'
    }

}
```
