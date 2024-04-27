import { CreateCarImageDbDto } from "../../Data/CarImage/CarImageDtos";
import { CarImages } from "../../Entities/car.image.entity";

export interface ICarImageRepository {
  create(values: CreateCarImageDbDto[]): Promise<CarImages[]>;
}
