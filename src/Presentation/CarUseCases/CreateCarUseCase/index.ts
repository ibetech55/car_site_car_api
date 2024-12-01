import { FileArray, UploadedFile } from "express-fileupload";
import { CreateCarImageDbDto } from "../../../Data/CarImage/CarImageDtos";
import { CreateCarDto } from "../../../Data/Cars/CreateCarDtos";
import { ICarRepository } from "../../../Repository/Car/ICarRepository";
import { ICarAddressRepository } from "../../../Repository/CarAddress/ICarAddressRepository";
import { ICarImageRepository } from "../../../Repository/CarImage/ICarImageRepository";
import { FileHandler } from "../../../Utils/FileHandler";
import { ITokenData } from "../../../Utils/GetUserId";
import { ICarUserRepository } from "../../../Repository/CarUser/ICarUserRespository";
import { AppError } from "../../../ErrorHandler/AppError";
import { CarUsers } from "../../../Entities/car.user.entity";
import { CarAddresses } from "../../../Entities/car.address.entity";
import { Cars } from "../../../Entities/car.entity";
import { IFeatureRepository } from "../../../Repository/Feature/IFeatureRepository";
import { featureRepository } from "../../../Containers/Feature/GetFeaturesGrouped";
import { Features } from "../../../Entities/feature.entity";
import { CarsFeatures } from "../../../Entities/car.feature.entity";
import { ICarFeatureRepository } from "../../../Repository/CarFeature/ICarFeatureRepository";

class CreateCarUseCase {
  private readonly _repository: ICarRepository;
  private readonly _addressRepository: ICarAddressRepository;
  private readonly _imageRepository: ICarImageRepository;
  private readonly _carUserRepository: ICarUserRepository;
  private readonly _fileHandler: FileHandler;
  private readonly _featureRepository: IFeatureRepository;
  private readonly _carsFeaturesRepository: ICarFeatureRepository;

  constructor(
    repository: ICarRepository,
    addressRepository: ICarAddressRepository,
    imageRepository: ICarImageRepository,
    carUserRepository: ICarUserRepository,
    fileHandler: FileHandler,
    featureRepository: IFeatureRepository,
    carsFeaturesRepository: ICarFeatureRepository
  ) {
    this._repository = repository;
    this._addressRepository = addressRepository;
    this._imageRepository = imageRepository;
    this._carUserRepository = carUserRepository;
    this._fileHandler = fileHandler;
    this._featureRepository = featureRepository;
    this._carsFeaturesRepository = carsFeaturesRepository;
  }

  async execute(
    values: CreateCarDto,
    userValues: ITokenData,
    files: FileArray
  ): Promise<Boolean> {
    const carUserData: CarUsers = await this._carUserRepository.findByUserIdAndEmail(
      userValues.user_id,
      userValues.email
    );
    if (!carUserData) {
      throw new AppError("Bad Request", 400);
    }

    const addressData: CarAddresses = await this._addressRepository.create({
      city: values.city,
      state: values.state,
      address: values.address,
      zip_code: values.zipCode,
    });
    const carData: Cars = await this._repository.create({
      make: values.make,
      model: values.model,
      version: values.version,
      car_user_id: carUserData._id,
      car_address_id: addressData._id,
      price: values.price,
      mileage: values.mileage,
      color: values.model,
      transmission: values.transmission,
      car_year: values.year,
      active: false,
      vin: values.vin,
      exterior_color: values.exteriorColor.toLowerCase(),
      interior_color: values.interiorColor.toLowerCase(),
      condition: values.condition,
      number_owners: values.numberOwners,
      accident: values.accident,
      drive_train: values.drivetrain,
      engine: values.engine,
      seller_notes: values.comment,
      clean_history_report: values.cleanHistoryReport,
      has_issue: values.hasIssue,
      number_keys: values.numberKeys,
      has_payments: values.hasPayments,
      status: 'submitted'
    });


    const featuresArr = values.features.split(',');
    const featuresErr = [];
    const featuresPostData: CarsFeatures[] = [];

    for (const feat of featuresArr) {
      const featData = await this._featureRepository.getFeatureByName(feat);
      if (!featData) {
        featuresErr.push(feat)
      } else {
        featuresPostData.push({
          car_id: carData._id,
          feature_id: featData._id
        })
      }
    }

    if (featuresErr.length > 0) {
      throw new AppError(`The following features do not exist ${JSON.stringify(featuresArr)}`, 400)
    }
    await this._carsFeaturesRepository.createCarFeature(featuresPostData);

    const carImages = Array.isArray(files.carImages) ? files.carImages as UploadedFile[] : [files.carImages]
    const defaultImage = files.defaultImage as UploadedFile;

    const carImagesData: { values: CreateCarImageDbDto; data: Uint8Array }[] =
      carImages.map((image, index) => ({
        values: {
          filename: this._fileHandler.getFileName(image.mimetype.split("/")[1]),
          car_id: carData._id,
          position: index,
          default_image: false
        },
        data: image.data,
      }));

    carImagesData.push({
      values: {
        filename: this._fileHandler.getFileName(defaultImage.mimetype.split("/")[1]),
        car_id: carData._id,
        position: -1,
        default_image: true
      },
      data: defaultImage.data,
    })

    const carImagesValues: CreateCarImageDbDto[] = carImagesData.map(
      (carImageData) => carImageData.values
    );

    await this._imageRepository.create(carImagesValues);

    carImagesData.forEach((x) =>
      this._fileHandler.postFiles(x.data, x.values.filename)
    );

    return true;
  }
}

export { CreateCarUseCase };
