import couponRepository from "../repositories/coupon.repository.js";

async function createCouponService(newCoupon) {
  const createdCoupon = await couponRepository.createCouponRepository(
    newCoupon
  );

  if (!createdCoupon) throw new Error("Error creating Coupon");

  return createdCoupon;
}

async function findAllCouponsService() {
  const coupons = await couponRepository.findAllCouponsRepository();
  return coupons;
}

export default {
  createCouponService,
  findAllCouponsService,
};
