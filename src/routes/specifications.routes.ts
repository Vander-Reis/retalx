import { Router } from "express";

import { createSpecicationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecicationController.handle(request, response);
});

export { specificationsRoutes };
