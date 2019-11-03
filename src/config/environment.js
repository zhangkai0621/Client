/*
* 项目配置文件
*
* */
const env = process.env.NODE_ENV; // 当前环境
console.log('env',env)
let config = {};

// 开发环境
if (env === 'development') {
    config = {
        portUrl: 'http://localhost:3000', // 接口前缀地址
        wsUrl: 'ws://localhost:3000', // webscoket 前缀地址
    }
}
else if (env === 'production') { // 生产环境
    config = {
        portUrl: 'http://47.95.5.150:3000', // 接口前缀地址
        wsUrl: 'ws://47.95.5.150:3000', // webscoket 前缀地址
    }
}

export default config;

