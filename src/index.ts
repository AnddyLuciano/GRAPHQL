import { AppDataSource } from "./graphql/connection/AppDataSource";

AppDataSource.initialize()
    .then((_) => console.log("initialized successfully !"))
    .catch((e) => console.log("Error during source initialization", e));