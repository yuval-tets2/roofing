/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DetailWhereUniqueInput } from "./DetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DetailUpdateInput } from "./DetailUpdateInput";

@ArgsType()
class UpdateDetailArgs {
  @ApiProperty({
    required: true,
    type: () => DetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DetailWhereUniqueInput)
  @Field(() => DetailWhereUniqueInput, { nullable: false })
  where!: DetailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DetailUpdateInput,
  })
  @ValidateNested()
  @Type(() => DetailUpdateInput)
  @Field(() => DetailUpdateInput, { nullable: false })
  data!: DetailUpdateInput;
}

export { UpdateDetailArgs as UpdateDetailArgs };
