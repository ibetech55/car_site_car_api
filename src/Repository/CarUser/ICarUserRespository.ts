import { CreateCarUserDbDto } from "../../Data/CarUser/CreateCarUserDtos";
import { UpdateCarUserDbDto } from "../../Data/CarUser/UpdateCarUserDto";
import { CarUsers } from "../../Entities/car.user.entity";

export interface ICarUserRepository {
    create(values:CreateCarUserDbDto): Promise<CarUsers>;
    findByUserIdAndEmail(user_id: string, email:string): Promise<CarUsers>;
    getByUserId(userId: string);
    update(id: string, values:UpdateCarUserDbDto)
}