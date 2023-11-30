// Argumentos de entrada
// console.log(process.argv)

// Controlar el proceso y su salida
// 0: significa que todo a ido bien y el proceso tiene que terminar ahí.
// 1: significa que ha habido algun error y queremos que salga.
// process.exit(1)

// Podemos controlar eventos del proceso
// Podemos escuchar eventos del proceso. Tambien errores en concreto,
// errores que no hayamos controlado que se pasan como eventos.
process.on('exit', () => {
  // limpiar los recursos
})

// Current working directory - nos dice desde que carpeta estamos ejecutando el proceso.
console.log(process.cwd())

// Platform
console.log(process.env.NOVE_ENV)
