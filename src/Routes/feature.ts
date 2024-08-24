import { Router } from "express";
import { createFeatureController } from "../Containers/Feature/CreateFeature";
import { getFeatureByIdController } from "../Containers/Feature/GetFeatureById";
import { deleteFeatureController } from "../Containers/Feature/DeleteFeature";
import { updateFeatureController } from "../Containers/Feature/UpdateFeature";
import { getFeaturesController } from "../Containers/Feature/GetFeatures";
import { getFeaturesGroupedController } from "../Containers/Feature/GetFeaturesGrouped";

const featureRoutes = Router();
featureRoutes.get("/feature", (req, res) => getFeaturesController.handle(req, res));
featureRoutes.post("/feature", (req, res) => createFeatureController.handle(req, res));
featureRoutes.get("/feature/get-by-id/:id", (req, res) => getFeatureByIdController.handle(req, res));
featureRoutes.delete("/feature/:id", (req, res) => deleteFeatureController.handle(req, res));
featureRoutes.put("/feature/:id", (req, res) => updateFeatureController.handle(req, res));
featureRoutes.get("/feature/get-features-grouped", (req, res) => getFeaturesGroupedController.handle(req, res));

export { featureRoutes };
