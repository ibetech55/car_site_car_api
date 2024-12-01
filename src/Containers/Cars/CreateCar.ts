import { CreateCarController } from "../../Controllers/Cars/CreateCarController";
import { CreateCarUseCase } from "../../Presentation/CarUseCases/CreateCarUseCase";
import { CarRepository } from "../../Repository/Car/car.repository";
import { CarAddressRepository } from "../../Repository/CarAddress/CarAddress.repository";
import { CarFeatureRepository } from "../../Repository/CarFeature/car.feature.repository";
import { CarImageRepository } from "../../Repository/CarImage/CarImage.repository";
import { CarUserRepository } from "../../Repository/CarUser/car.user.repository";
import { FeatureRepository } from "../../Repository/Feature/feature.repository";
import { FileHandler } from "../../Utils/FileHandler";

const carRepository = new CarRepository();
const addressRepository = new CarAddressRepository();
const imageRepository = new CarImageRepository();
const carUserRepository = new CarUserRepository();
const fileHandler = new FileHandler();
const featureRepository = new FeatureRepository();
const carsFeaturesRepository = new CarFeatureRepository();
const createCarUseCase = new CreateCarUseCase(
  carRepository,
  addressRepository,
  imageRepository,
  carUserRepository,
  fileHandler,
  featureRepository,
  carsFeaturesRepository
);
const createCarController = new CreateCarController(createCarUseCase);

export { createCarController, createCarUseCase };
