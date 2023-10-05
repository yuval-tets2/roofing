/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PricingWhereUniqueInput } from "../../pricing/base/PricingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PricingUpdateManyWithoutOfficeLocationsInput {
  @Field(() => [PricingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PricingWhereUniqueInput],
  })
  connect?: Array<PricingWhereUniqueInput>;

  @Field(() => [PricingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PricingWhereUniqueInput],
  })
  disconnect?: Array<PricingWhereUniqueInput>;

  @Field(() => [PricingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PricingWhereUniqueInput],
  })
  set?: Array<PricingWhereUniqueInput>;
}

export { PricingUpdateManyWithoutOfficeLocationsInput as PricingUpdateManyWithoutOfficeLocationsInput };
