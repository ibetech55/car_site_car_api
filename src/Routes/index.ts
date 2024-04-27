import { Router } from "express";
import { carRoutes } from "./cars";

const apiRoutes = Router();
apiRoutes.use([carRoutes]);

export { apiRoutes };
