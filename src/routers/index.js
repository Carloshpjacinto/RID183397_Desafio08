import { Router } from "express";
import regionRouter from "./region.routers.js";
import couponRouter from "./coupon.routers.js";
import finalPriceRouter from "./finalprice.routers.js";

const router = Router();

router.use("/region", regionRouter);
router.use("/coupon", couponRouter);
router.use("/calculate", finalPriceRouter);

export default router;
