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