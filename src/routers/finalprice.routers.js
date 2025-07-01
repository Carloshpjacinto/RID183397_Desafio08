import finalpriceController from "../controllers/finalprice.controller.js";

import { Router } from "express";

const router = Router();

router.get("/", finalpriceController.finalPriceCalculation);

export default router;
