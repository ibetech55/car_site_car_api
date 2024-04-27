import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { ICarRepository } from "./ICarRepository";
import { Cars } from "../../Entities/car.entity";
import { CreateCarDbDto } from "../../Data/Cars/CreateCarDtos";

export class CarRepository implements ICarRepository {
  private readonly repository: Repository<Cars>;

  constructor() {
    this.repository = AppDataSource.getRepository<Cars>(Cars);
  }
  async create(values: CreateCarDbDto): Promise<Cars> {
    const newCar = this.repository.create(values);
    const data = await this.repository.save(newCar);
    return data;
  }
}
