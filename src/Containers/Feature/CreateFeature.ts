import { CreateFeatureController } from "../../Controllers/Feature/CreateFeatureController";
import { CreateFeatureUseCase } from "../../Presentation/FeatureUseCases/CreateFeatureUseCase";
import { FeatureRepository } from "../../Repository/Feature/feature.repository";

const featureRepository = new FeatureRepository();
const createFeatureUseCase = new CreateFeatureUseCase(featureRepository);
const createFeatureController = new CreateFeatureController(createFeatureUseCase);

export { createFeatureUseCase, createFeatureController }