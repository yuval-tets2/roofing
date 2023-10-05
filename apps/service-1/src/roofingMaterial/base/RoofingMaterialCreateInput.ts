/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ColorCreateNestedManyWithoutRoofingMaterialsInput } from "./ColorCreateNestedManyWithoutRoofingMaterialsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RoofingMaterialCreateInput {
  @ApiProperty({
    required: false,
    type: () => ColorCreateNestedManyWithoutRoofingMaterialsInput,
  })
  @ValidateNested()
  @Type(() => ColorCreateNestedManyWithoutRoofingMaterialsInput)
  @IsOptional()
  @Field(() => ColorCreateNestedManyWithoutRoofingMaterialsInput, {
    nullable: true,
  })
  colors?: ColorCreateNestedManyWithoutRoofingMaterialsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  manufacturer!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  maxLifespan!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  minLifespan!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  supplier!: string;
}

export { RoofingMaterialCreateInput as RoofingMaterialCreateInput };