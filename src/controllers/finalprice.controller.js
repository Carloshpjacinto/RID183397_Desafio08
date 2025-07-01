import finalPriceService from "../services/finalprice.service.js";

async function finalPriceController(req, res) {
  const { country, state, category, price } = req.query;

  try {
    const finalPrice = await finalPriceService.calculateFinalPrice(
      country,
      state,
      category,
      price
    );

    res.status(201).send(finalPrice);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default { finalPriceController };
