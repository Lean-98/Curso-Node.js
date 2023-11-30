const fs = require('node:fs')

// El objeto global LS siempre esta buscando en el directorio en el que esta
// Y no le podemos pasar el directorio

// Para saber si el archivo existe
const file = fs.existsSync('content')
console.log(file)

// Si te da un error es porque no existe el archivo
// const file2 = fs.stat('content')
// console.log(file2)

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error en el directorio: ', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
