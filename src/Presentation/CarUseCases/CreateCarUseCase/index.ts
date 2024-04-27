import { FileArray, UploadedFile } from "express-fileupload";
import { CreateCarImageDbDto } from "../../../Data/CarImage/CarImageDtos";
import { CreateCarDto } from "../../../Data/Cars/CreateCarDtos";
import { ICarRepository } from "../../../Repository/Car/ICarRepository";
import { ICarAddressRepository } from "../../../Repository/CarAddress/ICarAddressRepository";
import { ICarImageRepository } from "../../../Repository/CarImage/ICarImageRepository";
import { FileHandler } from "../../../Utils/FileHandler";
import { CreateCarAddressDto } from "../../../Data/CarAddress/CreateCarAddressDtos";
import { ITokenData } from "../../../Utils/GetUserId";
import { ICarUserRepository } from "../../../Repository/CarUser/ICarUserRespository";
import { AppError } from "../../../ErrorHandler/AppError";
import { CarUsers } from "../../../Entities/car.user.entity";
import { CarAddresses } from "../../../Entities/car.address.entity";
import { Cars } from "../../../Entities/car.entity";

class CreateCarUseCase {
  private readonly _repository: ICarRepository;
  private readonly _addressRepository: ICarAddressRepository;
  private readonly _imageRepository: ICarImageRepository;
  private readonly _carUserRepository: ICarUserRepository;
  private readonly _fileHandler: FileHandler;

  constructor(
    repository: ICarRepository,
    addressRepository: ICarAddressRepository,
    imageRepository: ICarImageRepository,
    carUserRepository: ICarUserRepository,
    fileHandler: FileHandler
  ) {
    this._repository = repository;
    this._addressRepository = addressRepository;
    this._imageRepository = imageRepository;
    this._carUserRepository = carUserRepository;
    this._fileHandler = fileHandler;
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
    const addressValues: CreateCarAddressDto = JSON.parse(
      values.address as string
    );
    const addressData: CarAddresses = await this._addressRepository.create({
      city: addressValues.city,
      state: addressValues.state,
      address: addressValues.address,
      zip_code: addressValues.zipCode,
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
      transmission: values.model,
      car_year: values.year,
      active: false,
      vin: values.model,
    });

    const carImages = files.carImages as UploadedFile[];

    const carImagesData: { values: CreateCarImageDbDto; data: Uint8Array }[] =
      carImages.map((image, index) => ({
        values: {
          filename: this._fileHandler.getFileName(image.mimetype.split("/")[1]),
          car_id: carData._id,
          position: index + 1,
        },
        data: image.data,
      }));

    const carImagesValues: CreateCarImageDbDto[] = carImagesData.map(
      (carImageData) => carImageData.values
    );

    await this._imageRepository.create(carImagesValues);

    carImagesData.map((x) =>
      this._fileHandler.postFiles(x.data, x.values.filename)
    );

    return true;
  }
}

export { CreateCarUseCase };
