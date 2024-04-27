import { Router } from "express";
import { createCarController } from "../Containers/Cars/CreateCar";


const carRoutes = Router();
carRoutes.post("/car", (req, res) => createCarController.handle(req, res));


export { carRoutes };
