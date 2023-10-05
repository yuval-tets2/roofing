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
import { MeasurementWhereInput } from "./MeasurementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MeasurementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MeasurementWhereInput,
  })
  @ValidateNested()
  @Type(() => MeasurementWhereInput)
  @IsOptional()
  @Field(() => MeasurementWhereInput, {
    nullable: true,
  })
  every?: MeasurementWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeasurementWhereInput,
  })
  @ValidateNested()
  @Type(() => MeasurementWhereInput)
  @IsOptional()
  @Field(() => MeasurementWhereInput, {
    nullable: true,
  })
  some?: MeasurementWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeasurementWhereInput,
  })
  @ValidateNested()
  @Type(() => MeasurementWhereInput)
  @IsOptional()
  @Field(() => MeasurementWhereInput, {
    nullable: true,
  })
  none?: MeasurementWhereInput;
}
export { MeasurementListRelationFilter as MeasurementListRelationFilter };