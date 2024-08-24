import { Router } from "express";
import { carRoutes } from "./car";
import { featureRoutes } from "./feature";

const apiRoutes = Router();
apiRoutes.use([carRoutes, featureRoutes]);

export { apiRoutes };
