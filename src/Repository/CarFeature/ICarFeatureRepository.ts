import { CreateCarFeatureDbDto } from "../../Data/CarFeatue/CreateCarFeatureDto";
import { CarsFeatures } from "../../Entities/car.feature.entity";

export interface ICarFeatureRepository {
    createCarFeature(values: CreateCarFeatureDbDto[]): Promise<CarsFeatures[]>;
}