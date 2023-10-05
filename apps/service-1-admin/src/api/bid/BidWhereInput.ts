import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { LineItemListRelationFilter } from "../lineItem/LineItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BidWhereInput = {
  companyId?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  lineItems?: LineItemListRelationFilter;
  quoteUrl?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  updatedAt?: DateTimeFilter;
};
