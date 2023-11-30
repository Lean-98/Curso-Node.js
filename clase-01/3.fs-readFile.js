/* eslint-disable n/handle-callback-err */
const fs = require('node:fs')

// Un callback es una función que se ejecuta cuando se completa una tarea asíncrona.
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log('Primer texto:', text)
})

console.log('---> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('Segundo texto:', text)
})
