import { config } from "dotenv";
import { DataSource } from "typeorm";

config()

export const AppDataSource: DataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE_NAME,
    entities: [__dirname + '/../../src/**/*.entity.{js,ts}'],
    synchronize: true,
    logging: false
})