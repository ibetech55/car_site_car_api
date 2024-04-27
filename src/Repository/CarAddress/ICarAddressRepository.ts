import { CreateCarAddressDbDto } from "../../Data/CarAddress/CreateCarAddressDtos";
import { CarAddresses } from "../../Entities/car.address.entity";

export interface ICarAddressRepository {
    create(values: CreateCarAddressDbDto):Promise<CarAddresses>;
}