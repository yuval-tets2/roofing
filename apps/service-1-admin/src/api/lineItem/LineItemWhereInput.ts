import { BidWhereUniqueInput } from "../bid/BidWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type LineItemWhereInput = {
  bid?: BidWhereUniqueInput;
  createdAt?: DateTimeFilter;
  details?: StringFilter;
  id?: StringFilter;
  price?: FloatFilter;
  roofingTypeId?: StringFilter;
  updatedAt?: DateTimeFilter;
  wasteFactor?: FloatFilter;
};
