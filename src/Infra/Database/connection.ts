import "reflect-metadata";
import "../../Configs/Enviroment";
import { DataSource } from "typeorm";
import { CarUsers } from "../../Entities/car.user.entity";
import { CarAddresses } from "../../Entities/car.address.entity";
import { CarImages } from "../../Entities/car.image.entity";
import { Cars } from "../../Entities/car.entity";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
} from "../../Configs/Enviroment/EnviromentVariables";
import { Features } from "../../Entities/feature.entity";
import { CarsFeatures } from "../../Entities/car.feature.entity";
const AppDataSource = new DataSource({
  type: "postgres",
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  host: DATABASE_HOST,
  synchronize: false,
  logging: false,
  entities: [CarUsers, CarAddresses, CarImages, Cars, Features, CarsFeatures],
  migrations: [`${__dirname}/**/Migrations/*.{ts,js}`],
});
export { AppDataSource };
