const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const port = process.env.port || 3212

const indexHtml = (() => {
    return fs.readFileSync(path.resolve(__dirname, './index.html'), 'UTF-8')
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")))

require("./build/dev-server")(app)

app.get('*', (req, res) => {
    res.write(indexHtml)
    res.end()
})

app.listen(port, ()=> {
  console.log('server started at '+port)  
})