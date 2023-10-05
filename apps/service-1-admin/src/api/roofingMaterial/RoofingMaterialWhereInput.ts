import { ColorListRelationFilter } from "../color/ColorListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type RoofingMaterialWhereInput = {
  colors?: ColorListRelationFilter;
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  manufacturer?: StringFilter;
  maxLifespan?: FloatFilter;
  minLifespan?: FloatFilter;
  name?: StringFilter;
  status?: StringFilter;
  supplier?: StringFilter;
  updatedAt?: DateTimeFilter;
};
