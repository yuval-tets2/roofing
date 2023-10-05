import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoofingMaterialWhereUniqueInput } from "../roofingMaterial/RoofingMaterialWhereUniqueInput";

export type ColorWhereInput = {
  color?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  pictureUrl?: StringNullableFilter;
  roofingMaterial?: RoofingMaterialWhereUniqueInput;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
};
