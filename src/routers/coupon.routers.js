import couponsController from "../controllers/coupon.controller.js";

import { Router } from "express";

const router = Router();

router.post("/", couponsController.createCouponController);
router.get("/", couponsController.findAllCouponsController);
router.put("/:id", couponsController.updateCouponController);
router.delete("/:id", couponsController.deleteCouponController);

export default router;
