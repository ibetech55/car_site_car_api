import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { CarAddresses } from "../../Entities/car.address.entity";
import { ICarAddressRepository } from "./ICarAddressRepository";
import { CreateCarAddressDbDto } from "../../Data/CarAddress/CreateCarAddressDtos";

export class CarAddressRepository implements ICarAddressRepository {
  private readonly repository: Repository<CarAddresses>;

  constructor() {
    this.repository = AppDataSource.getRepository<CarAddresses>(CarAddresses);
  }
  async create(values: CreateCarAddressDbDto):Promise<CarAddresses> {
    const newAddress = this.repository.create(values);
    const data = await this.repository.save(newAddress);
    return data;
  }
}
