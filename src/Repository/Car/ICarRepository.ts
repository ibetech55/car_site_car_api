import { CreateCarDbDto } from "../../Data/Cars/CreateCarDtos";
import { Cars } from "../../Entities/car.entity";

export interface ICarRepository {
    create(values: CreateCarDbDto): Promise<Cars>;
}