import { Repository } from "typeorm";
import { CreateFeatureDbDto } from "../../Data/Feature/CreateFeature";
import { Features } from "../../Entities/feature.entity";
import { IFeatureRepository } from "./IFeatureRepository";
import { AppDataSource } from "../../Infra/Database/connection";
import { UpdateFeatureDbDto } from "../../Data/Feature/UpdateFeatureDto";

export class FeatureRepository implements IFeatureRepository {
    private readonly repository: Repository<Features>;

    constructor() {
        this.repository = AppDataSource.getRepository<Features>(Features);
    }

    async getFeatureById(id: string): Promise<Features> {
        try {
            const data = await this.repository.findOne({ where: { _id: id } });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getFeatureByName(featureName: string): Promise<Features> {
        try {
            const data = await this.repository.findOne({ where: { feature_name: featureName } });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateFeature(id: string, values: UpdateFeatureDbDto): Promise<boolean> {
        try {
            await this.repository.update(id, values)
            return true
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFeature(id: string): Promise<boolean> {
        try {
            await this.repository.update(id, { active: false });
            await this.repository.softDelete(id);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async createFeature(values: CreateFeatureDbDto): Promise<Features> {
        try {
            const newFeature = this.repository.create(values);
            const data = await this.repository.save(newFeature);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getFeatures(): Promise<Features[]> {
        try {
            const data = await this.repository.find();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}