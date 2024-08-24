import { GetFeatureDbDto, GetFeatureDto } from "../../../Data/Feature/GetFeature";
import { AppError } from "../../../ErrorHandler/AppError";
import { FeatureRepository } from "../../../Repository/Feature/feature.repository";

export class GetFeatureByIdUseCase {
    constructor(private _featureRepository: FeatureRepository) {
    }

    async execute(id: string): Promise<GetFeatureDto> {
        const data = await this._featureRepository.getFeatureById(id);
        if (!data) throw new AppError("Feature does not exsists", 404);

        const featureData: GetFeatureDto = {
            id: data._id,
            featureName: data.feature_name,
            featureType: data.feature_type,
            active: data.active,
            createdAt: data.created_at,
            updatedAt: data.updated_at
        }
        return featureData;
    }
}