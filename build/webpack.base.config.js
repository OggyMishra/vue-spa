const path = require('path')

const config = {
    entry :{
        app: path.resolve(__dirname, "../src/client-entry.js")
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test : /(\.js$)/,
                loader : "eslint-loader",
                exclude: /node-modules/
            }
        ]
    },
    output : {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        filename:"assets/js/[name].js"
    },
    resolve: {
        alias: {
            vue:'vue/dist/vue.js'
        }
    }
}

module.exports = config