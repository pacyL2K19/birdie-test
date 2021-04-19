import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config()

const db = process.env.DATABASE_DEV || ""
const username = "root"
const password = process.env.PASSWORD || ""

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate();
