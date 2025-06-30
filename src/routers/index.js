import { Router } from "express";
import regionRouter from "./region.routers.js";
import couponRouter from "./coupon.routers.js";

const router = Router();

router.use("/region", regionRouter);
router.use("/coupon", couponRouter);

export default router;
