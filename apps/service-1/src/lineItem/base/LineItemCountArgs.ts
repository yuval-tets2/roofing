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
import { LineItemWhereInput } from "./LineItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LineItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => LineItemWhereInput,
  })
  @Field(() => LineItemWhereInput, { nullable: true })
  @Type(() => LineItemWhereInput)
  where?: LineItemWhereInput;
}

export { LineItemCountArgs as LineItemCountArgs };