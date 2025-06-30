import couponService from "../services/coupon.service.js";

async function createCouponController(req, res) {
  const newCoupon = req.body;

  try {
    const createdCoupon = await couponService.createCouponService(newCoupon);
    res.status(201).send(createdCoupon);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function findAllCouponsController(req, res) {
  try {
    const coupons = await couponService.findAllCouponsService();
    return res.send(coupons);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

export default { createCouponController, findAllCouponsController };
