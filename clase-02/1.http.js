const http = require('node:http') // Protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3007

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('<h1>Welcome to my website! Página</h1>')
  } else if (req.url === '/profile.png') {
    fs.readFile('profile.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contact') {
    res.statusCode = 200 // OK
    res.end('<h1>Welcome to my pag of contact!</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port: http://localhost:${desiredPort}`)
})
