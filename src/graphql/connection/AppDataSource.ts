import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    host: "localhost",
    type: "mysql",
    port: 3306,
    synchronize: true,
    username: "root",
    password: "",
    database: "commerce",
    entities: ["dist/graphql/models/*.js"],
});

export { AppDataSource };
