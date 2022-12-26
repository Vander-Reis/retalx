import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecicationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecicationController.handle);

export { specificationsRoutes };
