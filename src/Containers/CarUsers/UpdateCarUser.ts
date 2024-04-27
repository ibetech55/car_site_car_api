import { UpdateCarUserUseCase } from "../../Presentation/CarUserUseCases/UpdateCarUserUseCase";
import { UpdateCarUserQueue } from "../../Queue/Actions_/UpdateCarUserQueue/UpdateCarUserQueue";
import { CarUserRepository } from "../../Repository/CarUser/car.user.repository";

const repository = new CarUserRepository();
const updateCarUserUseCase = new UpdateCarUserUseCase(repository);
export { updateCarUserUseCase };