import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { ICarFeatureRepository } from "./ICarFeatureRepository";
import { CreateCarFeatureDbDto } from "../../Data/CarFeatue/CreateCarFeatureDto";
import { CarsFeatures } from "../../Entities/car.feature.entity";

export class CarFeatureRepository implements ICarFeatureRepository {
    private readonly repository: Repository<CarsFeatures>;

    constructor() {
        this.repository = AppDataSource.getRepository<CarsFeatures>(CarsFeatures);
    }
    async createCarFeature(values: CreateCarFeatureDbDto[]): Promise<CarsFeatures[]> {
        try {
            const newCarFeature = this.repository.create(values);
            const data = await this.repository.save(newCarFeature);
            return data;
        } catch (error) {
            console.log(error);
        }
    }


}