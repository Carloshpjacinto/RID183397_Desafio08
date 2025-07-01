import {
  MinLength,
  IsNumber,
  IsNotEmpty,
  IsString,
  IsBoolean,
} from "class-validator";

export class FinalPriceDto {
  @IsNotEmpty()
  @IsString()
  country;
  @IsString()
  @IsNotEmpty()
  state;
  @IsString()
  @IsNotEmpty()
  category;
  @IsNumber()
  @IsNotEmpty()
  price;
}
