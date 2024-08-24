import { CreateFeatureDto } from "../../../Data/Feature/CreateFeature";
import { GetFeatureDto } from "../../../Data/Feature/GetFeature";
import { AppError } from "../../../ErrorHandler/AppError";
import { FeatureRepository } from "../../../Repository/Feature/feature.repository";

export class CreateFeatureUseCase {
    constructor(private _featureRepository: FeatureRepository) {
    }

    async execute(values: CreateFeatureDto): Promise<GetFeatureDto> {
        const checkFeature = await this._featureRepository.getFeatureByName(values.featureName);
        if (checkFeature) throw new AppError("Feature already exsists", 400);

        const data = await this._featureRepository.createFeature({
            feature_name: values.featureName,
            feature_type: values.featureType,
            active: true
        })

        const newData: GetFeatureDto = {
            id: data._id,
            featureName: data.feature_name,
            featureType: data.feature_type,
            active: data.active,
            createdAt: data.created_at
        }

        return newData
    }
}