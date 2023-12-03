const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

// Middleware de express
app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // Solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // Escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString() // Transformar el buffer(binario) en string
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // Mutar la request y meter la información en el req.body
//     // La request es unico para cada petición
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // req.body deberiamos guardar en bbdd
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
