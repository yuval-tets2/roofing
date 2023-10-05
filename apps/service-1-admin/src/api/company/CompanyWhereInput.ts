import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OfficeLocationListRelationFilter } from "../officeLocation/OfficeLocationListRelationFilter";

export type CompanyWhereInput = {
  city?: StringFilter;
  country?: StringFilter;
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  email?: StringFilter;
  foundingYear?: IntNullableFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  logoStatus?: StringNullableFilter;
  name?: StringFilter;
  officeLocations?: OfficeLocationListRelationFilter;
  phoneNumber?: StringNullableFilter;
  state?: StringNullableFilter;
  status?: StringNullableFilter;
  street1?: StringNullableFilter;
  street2?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  zipCode?: StringNullableFilter;
};
