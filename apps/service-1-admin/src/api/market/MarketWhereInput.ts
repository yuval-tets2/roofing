import { CityListRelationFilter } from "../city/CityListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type MarketWhereInput = {
  cities?: CityListRelationFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
};
