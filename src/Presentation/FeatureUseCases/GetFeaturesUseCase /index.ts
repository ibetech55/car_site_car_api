import { GetFeatureDto } from "../../../Data/Feature/GetFeature";
import { FeatureRepository } from "../../../Repository/Feature/feature.repository";

export class GetFeaturesUseCase {
    constructor(private _featureRepository: FeatureRepository) {
    }

    async execute(): Promise<GetFeatureDto[]> {
        const data = await this._featureRepository.getFeatures()

        const featuresData: GetFeatureDto[] = data.map(x => ({
            id: x._id,
            featureName: x.feature_name,
            featureType: x.feature_type,
            active: x.active,
            createdAt: x.created_at
        }))

        return featuresData
    }
}