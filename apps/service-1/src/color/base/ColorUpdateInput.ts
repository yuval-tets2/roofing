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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { RoofingMaterialWhereUniqueInput } from "../../roofingMaterial/base/RoofingMaterialWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ColorUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  color?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pictureUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoofingMaterialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoofingMaterialWhereUniqueInput)
  @IsOptional()
  @Field(() => RoofingMaterialWhereUniqueInput, {
    nullable: true,
  })
  roofingMaterial?: RoofingMaterialWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string;
}

export { ColorUpdateInput as ColorUpdateInput };