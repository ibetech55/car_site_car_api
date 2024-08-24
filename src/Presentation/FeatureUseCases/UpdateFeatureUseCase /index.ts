import { UpdateFeatureDto } from "../../../Data/CarFeatue/UpdateCarDto";
import { GetFeatureDto } from "../../../Data/Feature/GetFeature";
import { AppError } from "../../../ErrorHandler/AppError";
import { FeatureRepository } from "../../../Repository/Feature/feature.repository";

export class UpdateFeatureUseCase {
    constructor(private _featureRepository: FeatureRepository) {
    }

    async execute(id: string, values: UpdateFeatureDto): Promise<boolean> {
        const checkFeature = await this._featureRepository.getFeatureById(id);
        if (!checkFeature) throw new AppError("Feature does not exsists", 404);

        const data = await this._featureRepository.updateFeature(id, values)

        return data
    }
}