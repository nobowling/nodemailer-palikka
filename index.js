const app = require('./app')
const http = require('http')

const server = http.createServer(app)
server.listen(process.env.PORT, () => {
  console.log("We are live on port 4444")
})
