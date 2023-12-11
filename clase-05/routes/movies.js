import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

// EN EL FUTURO: el import del json podria ser así:
// import movies from './movies.json' with { type: 'json' }

// 1- forma de como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// 2- forma de como leer un json en ESModules recomendado por ahora
// const movies = readJSON('./movies.json')

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router()

  const movieController = new MovieController({ movieModel })
  // Controllers
  moviesRouter.get('/', movieController.getAll)
  moviesRouter.post('/', movieController.create)

  moviesRouter.get('/:id', movieController.getById)
  moviesRouter.delete('/:id', movieController.delete)
  moviesRouter.patch('/:id', movieController.update)

  return moviesRouter
}
