import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { CarImages } from "../../Entities/car.image.entity";
import { CreateCarImageDbDto } from "../../Data/CarImage/CarImageDtos";
import { ICarImageRepository } from "./ICarImageRepository";

export class CarImageRepository implements ICarImageRepository {
  private readonly repository: Repository<CarImages>;

  constructor() {
    this.repository = AppDataSource.getRepository<CarImages>(CarImages);
  }
  async create(values: CreateCarImageDbDto[]):Promise<CarImages[]> {
    const newImage = this.repository.create(values);
    const data = await this.repository.save(newImage);
    return data;
  }
}
