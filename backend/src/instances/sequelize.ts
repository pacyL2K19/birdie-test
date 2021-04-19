import { Sequelize } from 'sequelize';

const db = process.env.DATABASE_DEV || ""
const username = process.env.USERNAME || ""
const password = process.env.PASSWORD || ""

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate();
