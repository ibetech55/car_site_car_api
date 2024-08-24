import { FeatureTypeGroupedDto } from "../../../Data/Feature/GetFeature";
import { FeatureRepository } from "../../../Repository/Feature/feature.repository";

export class GetFeaturesGroupedUseCase {
    constructor(private _featureRepository: FeatureRepository) {
    }

    async execute(): Promise<FeatureTypeGroupedDto[]> {
        const data = await this._featureRepository.getFeatures();
        const featuresGrouped: FeatureTypeGroupedDto[] = [];
        data.forEach((x) => {
            if (!featuresGrouped.some((fg => fg.featureType === x.feature_type))) {
                featuresGrouped.push({
                    featureType: x.feature_type,
                    features: []
                });
            }
            const index = featuresGrouped.findIndex((feat) => feat.featureType === x.feature_type);
            if (index > -1) {
                featuresGrouped[index].features.push(x.feature_name);
            }
        })

        return featuresGrouped;
    }
}