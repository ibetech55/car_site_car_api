import { CreateCarUserUseCase } from "../../Presentation/CarUserUseCases/CreateCarUserUseCase";
import { RegisterUserQueue } from "../../Queue/Actions_/RegisterCarUserQueue/RegisterCarUserQueue";
import { CarUserRepository } from "../../Repository/CarUser/car.user.repository";

const repository = new CarUserRepository();
const createCarUserUseCase = new CreateCarUserUseCase(repository);
export { createCarUserUseCase };