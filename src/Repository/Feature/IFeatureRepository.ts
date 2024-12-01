import { CreateFeatureDbDto } from "../../Data/Feature/CreateFeature";
import { UpdateFeatureDbDto } from "../../Data/Feature/UpdateFeatureDto";
import { Features } from "../../Entities/feature.entity";

export interface IFeatureRepository {
    createFeature(values: CreateFeatureDbDto): Promise<Features>;
    getFeatures(): Promise<Features[]>;
    getFeatureById(id: string): Promise<Features>;
    getFeatureByName(featureName: string): Promise<Features>;
    deleteFeature(id: string): Promise<boolean>;
    updateFeature(id: string, values: UpdateFeatureDbDto): Promise<boolean>;
}