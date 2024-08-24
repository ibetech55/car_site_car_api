import { AppError } from "../../../ErrorHandler/AppError";
import { FeatureRepository } from "../../../Repository/Feature/feature.repository";

export class DeleteFeatureUseCase {
    constructor(private _featureRepository: FeatureRepository) {
    }

    async execute(id: string): Promise<boolean> {
        const checkFeature = await this._featureRepository.getFeatureById(id);
        if (!checkFeature) throw new AppError("Feature does not exsists", 404);

        await this._featureRepository.deleteFeature(id)

        return true;
    }
}