import { UpdateCarUserDto } from "../../../Data/CarUser/UpdateCarUserDto";
import { AppError } from "../../../ErrorHandler/AppError";
import { ICarUserRepository } from "../../../Repository/CarUser/ICarUserRespository";

class UpdateCarUserUseCase {
  private readonly _carUserRepository: ICarUserRepository;
  constructor(carUserRepository: ICarUserRepository) {
    this._carUserRepository = carUserRepository;
  }

  async execute(values: UpdateCarUserDto) {
    const updateValues: UpdateCarUserDto = {
      ...values,
    };
    delete updateValues.user_id;

    const carUserData = await this._carUserRepository.getByUserId(
      values.user_id
    );
    if (!carUserData) {
      throw new AppError("Bad Request", 400);
    }
    const data = await this._carUserRepository.update(
      carUserData._id,
      updateValues
    );
    return data;
  }
}

export { UpdateCarUserUseCase };
