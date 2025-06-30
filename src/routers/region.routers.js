import regionController from "../controllers/region.controller.js";

import { Router } from "express";

const router = Router();

router.post("/", regionController.createRegionController);
router.get("/", regionController.findAllRegionsController);

export default router;
