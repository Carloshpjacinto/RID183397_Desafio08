import finalPriceService from "../services/finalprice.service.js";

async function finalPriceController(req, res) {
  const { country, state, category, price, coupon } = req.query;

  try {
    const finalPrice = await finalPriceService.calculateFinalPrice(
      country,
      state,
      category,
      price,
      coupon
    );

    res.status(201).send(finalPrice);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default { finalPriceController };
