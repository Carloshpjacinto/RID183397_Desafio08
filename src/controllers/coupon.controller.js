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

async function findACouponsByNameController(req, res) {
  const { code } = req.query;
  try {
    const coupon = await couponService.findCouponByNameService(code);
    return res.send(coupon);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function updateCouponController(req, res) {
  try {
    const updatedCoupon = req.body;
    const couponId = req.params.id;
    const response = await couponService.updateCouponService(
      updatedCoupon,
      couponId
    );
    return res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteCouponController(req, res) {
  try {
    const couponId = req.params.id;
    const response = await regionService.deleteRegionService(couponId);
    return res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export default {
  createCouponController,
  findACouponsByNameController,
  updateCouponController,
  deleteCouponController,
};
