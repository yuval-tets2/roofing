import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { MeasurementListRelationFilter } from "../measurement/MeasurementListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type JobWhereInput = {
  address?: AddressWhereUniqueInput;
  addressId?: StringNullableFilter;
  bids?: BidListRelationFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  measurements?: MeasurementListRelationFilter;
  reports?: ReportListRelationFilter;
  selectedBidAt?: DateTimeNullableFilter;
  selectedBidId?: StringNullableFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
  userId?: StringFilter;
};
