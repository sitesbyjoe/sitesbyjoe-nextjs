import mysql from 'mysql2/promise'

export default async function handler( req, res) {

  const dbConnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  });

  try {
    const query = 'SELECT * FROM pages WHERE slug = "about"'
    const values = []
    const [data] = await dbConnection.execute(query, values)
    dbConnection.end()
    res.status(200).json({ results: data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}