import { UpdateFeatureController } from "../../Controllers/Feature/UpdateFeatureController";
import { UpdateFeatureUseCase } from "../../Presentation/FeatureUseCases/UpdateFeatureUseCase ";
import { FeatureRepository } from "../../Repository/Feature/feature.repository";

const featureRepository = new FeatureRepository();
const updateFeatureUseCase = new UpdateFeatureUseCase(featureRepository);
const updateFeatureController = new UpdateFeatureController(updateFeatureUseCase);

export { updateFeatureUseCase, updateFeatureController }