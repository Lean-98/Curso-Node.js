import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      const query = `
    SELECT BIN_TO_UUID(movie.id) as id, movie.title, movie.year, movie.director, movie.duration, movie.poster, movie.rate, genre.name as genre 
      FROM movie
      JOIN movie_genres ON movie.id = movie_genres.movie_id
      JOIN genre ON genre.id = movie_genres.genre_id
      WHERE genre.name = ?;`

      const [genres] = await connection.query(query, [genre])
      if (genres.length === 0) return []

      return genres
    }

    const [movies] = await connection.query(
      'SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie;'
    )

    return movies
  }

  static async getById ({ id }) {
    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate , BIN_TO_UUID(id) id
      FROM movie WHERE id = UUID_TO_BIN(?);`,
      [id]
    )

    if (movies.length === 0) return null

    return movies[0]
  }

  // TODO CREATE MOVIE
  static async create ({ input }) {
    const {
      // genre, // genreInput, genre is an array
      title,
      year,
      duration,
      director,
      rate,
      poster
    } = input

    // todo: crear la conexión de genre

    // crypto.randomUUID()
    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult

    try {
      await connection.query(
        `INSERT INTO movie (id, title, year, director, duration, poster, rate)
        VALUES ( UUID_TO_BIN("${uuid}"),?, ?, ?, ?, ?, ?);`,
        [title, year, director, duration, poster, rate])
    } catch (error) {
      // No mostrar el error porque puedes enviar información sensible al usuario
      throw new Error('Error creating movie')
      // enviar la traza a un servicio interno
      // sendLog(e)
    }

    const [movies] = await connection.query(
      `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id 
      FROM movie WHERE id = UUID_TO_BIN(?);`,
      [uuid]
    )

    return movies[0]
  }

  static async delete ({ id }) {
    try {
      await connection.query(
        'DELETE FROM movie WHERE id = UUID_TO_BIN(?);', [id])
      // connection.end()
    } catch (error) {
      throw new Error('error when deleting the film')
    }
  }

  static async update ({ id, updatedData }) {
    // try {
    //   const updateQuery = `
    //   UPDATE movie
    //   SET title = ?, year = ?, director = ?, duration = ?, poster = ?, rate = ?
    //   WHERE id = UUID_TO_BIN(?);`

    //   const { title, year, director, duration, poster, rate } = updatedData
    //   const updateParams = [title, year, director, duration, poster, rate, id]
    //   const [updateResult] = await connection.query(updateQuery, updateParams)
    //   // connection.end()
    //   console.log(updateResult)
    //   return updateResult
    // } catch (error) {
    //   throw new Error('error when updating the film')
    // }
  }
}
