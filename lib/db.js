import mysql from 'mysql2/promise'

export default async function excuteQuery(query, values) {

  const dbConnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  });

  try {
    const [data] = await dbConnection.execute(query, values)
    dbConnection.end()
    return data
  } catch (error) {
    return error
  }
}