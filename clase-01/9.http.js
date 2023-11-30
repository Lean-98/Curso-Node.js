const http = require('node:http') // Protocolo HTTP
const { findAvailablePort } = require('./10.find-port.js')

const desiredPort = process.env.PORT ?? 3007
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hi everyone!')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port: http://localhost:${port}`)
  })
})
