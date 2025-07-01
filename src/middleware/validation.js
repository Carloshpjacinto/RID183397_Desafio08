import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
export * from "class-validator";

export const validationPipe = async (schema, requestObject) => {
  const errorsResult = {};
  const transformedClass = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass);
  let constraints = [];

  if (errors.length > 0) {
    for (let err of errors) {
      for (let key in err.constraints) {
        if (Object.prototype.hasOwnProperty.call(err.constraints, key)) {
          constraints.push(err.constraints[key].toString());
          errorsResult["messages"] = constraints;
        }
      }
    }
  }
  return errorsResult;
};
