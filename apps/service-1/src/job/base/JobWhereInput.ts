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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BidListRelationFilter } from "../../bid/base/BidListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../../image/base/ImageListRelationFilter";
import { MeasurementListRelationFilter } from "../../measurement/base/MeasurementListRelationFilter";
import { ReportListRelationFilter } from "../../report/base/ReportListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class JobWhereInput {
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
  address?: AddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  addressId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => BidListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BidListRelationFilter)
  @IsOptional()
  @Field(() => BidListRelationFilter, {
    nullable: true,
  })
  bids?: BidListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ImageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ImageListRelationFilter)
  @IsOptional()
  @Field(() => ImageListRelationFilter, {
    nullable: true,
  })
  images?: ImageListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MeasurementListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MeasurementListRelationFilter)
  @IsOptional()
  @Field(() => MeasurementListRelationFilter, {
    nullable: true,
  })
  measurements?: MeasurementListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReportListRelationFilter)
  @IsOptional()
  @Field(() => ReportListRelationFilter, {
    nullable: true,
  })
  reports?: ReportListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  selectedBidAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  selectedBidId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  status?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter;
}

export { JobWhereInput as JobWhereInput };
