import { CreateCarUserDbDto } from "../../../Data/CarUser/CreateCarUserDtos";
import { ICarUserRepository } from "../../../Repository/CarUser/ICarUserRespository";

class CreateCarUserUseCase {
  private readonly _repository: ICarUserRepository;
  constructor(repository: ICarUserRepository) {
    this._repository = repository;
  }

  async execute(values:CreateCarUserDbDto){
    const user = await this._repository.create(values);
    return user;
  }
}

export { CreateCarUserUseCase };
