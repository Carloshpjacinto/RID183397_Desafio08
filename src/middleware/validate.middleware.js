import { validationPipe } from "./validation";

export const validationMiddleware =
  (validationSchema) => async (req, res, next) => {
    const result = await validationPipe(validationSchema, {
      ...req.body,
      ...req.params,
    });
    if (!isEmpty(result))
      return res.status(400).json({ success: false, ...result });
    next();
  };

const isEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
};
