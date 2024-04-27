import { Repository } from "typeorm";
import { ICarUserRepository } from "./ICarUserRespository";
import { AppDataSource } from "../../Infra/Database/connection";
import { CreateCarUserDbDto } from "../../Data/CarUser/CreateCarUserDtos";
import { CarUsers } from "../../Entities/car.user.entity";
import { UpdateCarUserDbDto } from "../../Data/CarUser/UpdateCarUserDto";

export class CarUserRepository implements ICarUserRepository {
  private readonly repository: Repository<CarUsers>;

  constructor() {
    this.repository = AppDataSource.getRepository<CarUsers>(CarUsers);
  }
  async getByUserId(userId: string) {
    const data = await this.repository.findOne({ where: { user_id: userId } });
    return data;
  }
  async update(id: string, values: UpdateCarUserDbDto) {
    const data = await this.repository.update(id, values);
    return data;
  }
  async findByUserIdAndEmail(userId: string, email: string): Promise<CarUsers> {
    const data = await this.repository.findOne({
      where: { user_id: userId, email },
    });
    return data;
  }
  async create(values: CreateCarUserDbDto): Promise<CarUsers> {
    const newUser = this.repository.create(values);
    const data = await this.repository.save(newUser);
    return data;
  }
}
