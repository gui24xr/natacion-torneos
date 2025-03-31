import { Sequelize } from "sequelize";

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const CONNECTION_VALUES = {
  host:process.env.DB_HOST,
  port:process.env.DB_PORT,
  dialect:'postgres', 
  logging: false,
  dialectOptions: { multipleStatements: true }
}

//Genero una instancia de la base de datos.
const database = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,CONNECTION_VALUES, /*{logging: console.log}*/ )


export default database

