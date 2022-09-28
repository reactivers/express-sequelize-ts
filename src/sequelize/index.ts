import { Sequelize } from "sequelize";
import { getPostgresDatabase, getPostgresHost, getPostgresPassword, getPostgresPort, isTest } from "../utils/functions";
const POSTGRES_DATABASE = getPostgresDatabase();
const POSTGRES_PASSWORD = getPostgresPassword();
const POSTGRES_HOST = getPostgresHost();
const POSTGRES_PORT = getPostgresPort();

const sequelize = isTest() ? new Sequelize("sqlite::memory", { logging: false }) :
    new Sequelize(POSTGRES_DATABASE, 'postgres', POSTGRES_PASSWORD, {
        port: POSTGRES_PORT,
        host: POSTGRES_HOST,
        dialect: 'postgres',
        logging: true
    })

sequelize
    .authenticate({})
    .then(() => {
        if (!isTest())
            console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export { sequelize }