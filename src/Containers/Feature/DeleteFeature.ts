import { DeleteFeatureController } from "../../Controllers/Feature/DeleteFeatureController";
import { DeleteFeatureUseCase } from "../../Presentation/FeatureUseCases/DeleteFeatureUseCase ";
import { FeatureRepository } from "../../Repository/Feature/feature.repository";

const featureRepository = new FeatureRepository();
const deleteFeatureUseCase = new DeleteFeatureUseCase(featureRepository);
const deleteFeatureController = new DeleteFeatureController(deleteFeatureUseCase);

export { deleteFeatureUseCase, deleteFeatureController }