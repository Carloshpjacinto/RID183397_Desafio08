import { z } from "zod";

const finalPriceSchema = z.object({
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  category: z.string().min(1, "Category is required"),
  price: z.string().min(1, "Price is required"),
});

export { finalPriceSchema };
