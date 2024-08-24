import { GetFeaturesController } from "../../Controllers/Feature/GetFeaturesController";
import { GetFeaturesUseCase } from "../../Presentation/FeatureUseCases/GetFeaturesUseCase ";
import { FeatureRepository } from "../../Repository/Feature/feature.repository";

const featureRepository = new FeatureRepository();
const getFeaturesUseCase = new GetFeaturesUseCase(featureRepository);
const getFeaturesController = new GetFeaturesController(getFeaturesUseCase);

export { getFeaturesUseCase, getFeaturesController }