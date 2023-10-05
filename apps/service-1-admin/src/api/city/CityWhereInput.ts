import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CityWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  market?: MarketWhereUniqueInput;
  name?: StringFilter;
  roofingMaterialIds?: StringFilter;
  state?: StringNullableFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
};
