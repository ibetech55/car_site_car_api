import { GetFeatureByIdController } from "../../Controllers/Feature/GetFeatureByIdController";
import { GetFeatureByIdUseCase } from "../../Presentation/FeatureUseCases/GetFeatureByIdUseCase ";
import { FeatureRepository } from "../../Repository/Feature/feature.repository";

const featureRepository = new FeatureRepository();
const getFeatureByIdUseCase = new GetFeatureByIdUseCase(featureRepository);
const getFeatureByIdController = new GetFeatureByIdController(getFeatureByIdUseCase);

export { getFeatureByIdUseCase, getFeatureByIdController }