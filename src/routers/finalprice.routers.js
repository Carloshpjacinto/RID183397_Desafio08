import finalPriceController from "../controllers/finalprice.controller.js";
import { Router } from "express";
import { validate } from "../middleware/validate.middleware.js";
import { finalPriceSchema } from "../schemas/finalPrice.schema.js";

const router = Router();

router.get("/", validate(finalPriceSchema), finalPriceController.finalPriceController);

export default router;
