import couponsController from "../controllers/coupon.controller.js";

import { Router } from "express";

const router = Router();

router.post("/", couponsController.createCouponController);
router.get("/", couponsController.findAllCouponsController);

export default router;
