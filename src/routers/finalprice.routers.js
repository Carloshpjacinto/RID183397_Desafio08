import finalPriceController from "../controllers/finalprice.controller.js";

import { Router } from "express";

const router = Router();

router.get("/", finalPriceController.finalPriceController);

export default router;
