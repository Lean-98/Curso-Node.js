import { Router } from 'express'
import { MovieController } from '../controllers/movies.js'

// EN EL FUTURO: el import del json podria ser así:
// import movies from './movies.json' with { type: 'json' }

// 1- forma de como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// 2- forma de como leer un json en ESModules recomendado por ahora
// const movies = readJSON('./movies.json')

export const moviesRouter = Router()

moviesRouter.get('/', MovieController.getAll)
moviesRouter.post('/', MovieController.create)

moviesRouter.get('/:id', MovieController.getById)
moviesRouter.delete('/:id', MovieController.delete)
moviesRouter.patch('/:id', MovieController.update)
