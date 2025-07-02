import regionController from "../controllers/region.controller.js";

import { Router } from "express";

const router = Router();

router.post("/", regionController.createRegionController);
router.get("/", regionController.findCountryController);
router.put("/:id", regionController.updateRegionController);
router.delete("/:id", regionController.deleteRegionController);

export default router;
