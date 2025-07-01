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

async function updateCouponService(updatedCoupon, couponId) {
  const coupon = await couponRepository.findCouponByIdRepository(couponId);
  if (!coupon) throw new Error("Coupon not found");
  const response = await couponRepository.updateCouponRepository(
    updatedCoupon,
    couponId
  );
  return response;
}

async function deleteCouponService(couponId) {
  const coupon = await couponRepository.findCouponByIdRepository(couponId);
  if (!coupon) throw new Error("Coupon not found");
  const response = await couponRepository.deleteCouponRepository(couponId);
  return response;
}

export default {
  createCouponService,
  findAllCouponsService,
  updateCouponService,
  deleteCouponService,
};
