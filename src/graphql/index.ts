import { AppDataSource } from "./connection/AppDataSource";

AppDataSource.initialize()
    .then((_) => console.log("initialized successfully !"))
    .catch((e) => console.log("Error during source initialization", e));
