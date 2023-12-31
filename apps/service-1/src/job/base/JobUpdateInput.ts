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
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { BidUpdateManyWithoutJobsInput } from "./BidUpdateManyWithoutJobsInput";
import { ImageUpdateManyWithoutJobsInput } from "./ImageUpdateManyWithoutJobsInput";
import { MeasurementUpdateManyWithoutJobsInput } from "./MeasurementUpdateManyWithoutJobsInput";
import { ReportUpdateManyWithoutJobsInput } from "./ReportUpdateManyWithoutJobsInput";

@InputType()
class JobUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressId?: string | null;

  @ApiProperty({
    required: false,
    type: () => BidUpdateManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => BidUpdateManyWithoutJobsInput)
  @IsOptional()
  @Field(() => BidUpdateManyWithoutJobsInput, {
    nullable: true,
  })
  bids?: BidUpdateManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutJobsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutJobsInput, {
    nullable: true,
  })
  images?: ImageUpdateManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => MeasurementUpdateManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => MeasurementUpdateManyWithoutJobsInput)
  @IsOptional()
  @Field(() => MeasurementUpdateManyWithoutJobsInput, {
    nullable: true,
  })
  measurements?: MeasurementUpdateManyWithoutJobsInput;

  @ApiProperty({
    required: false,
    type: () => ReportUpdateManyWithoutJobsInput,
  })
  @ValidateNested()
  @Type(() => ReportUpdateManyWithoutJobsInput)
  @IsOptional()
  @Field(() => ReportUpdateManyWithoutJobsInput, {
    nullable: true,
  })
  reports?: ReportUpdateManyWithoutJobsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  selectedBidAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  selectedBidId?: string | null;

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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string;
}

export { JobUpdateInput as JobUpdateInput };
