import { GetFeaturesGroupedController } from "../../Controllers/Feature/GetFeaturesGroupedController";
import { GetFeaturesGroupedUseCase } from "../../Presentation/FeatureUseCases/GetFeaturesGroupedUseCase";
import { FeatureRepository } from "../../Repository/Feature/feature.repository";

const featureRepository = new FeatureRepository();
const getFeaturesGroupedUseCase = new GetFeaturesGroupedUseCase(featureRepository);
const getFeaturesGroupedController = new GetFeaturesGroupedController(getFeaturesGroupedUseCase);

export { featureRepository, getFeaturesGroupedUseCase, getFeaturesGroupedController }