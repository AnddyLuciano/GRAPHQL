import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    host: "localhost",
    type: "mysql",
    port: 5432,
    synchronize: true,
    username: "root",
    password: "admin",
    database: "commerce",
    entities: ["dist/**/*.js"],
});

export { AppDataSource };
