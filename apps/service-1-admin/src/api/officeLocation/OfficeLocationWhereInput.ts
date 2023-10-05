import { StringFilter } from "../../util/StringFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PricingListRelationFilter } from "../pricing/PricingListRelationFilter";

export type OfficeLocationWhereInput = {
  city?: StringFilter;
  company?: CompanyWhereUniqueInput;
  country?: StringFilter;
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  email?: StringFilter;
  foundingYear?: IntNullableFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  logoStatus?: StringNullableFilter;
  name?: StringFilter;
  phoneNumber?: StringNullableFilter;
  pricing?: PricingListRelationFilter;
  state?: StringNullableFilter;
  status?: StringNullableFilter;
  street1?: StringNullableFilter;
  street2?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  zipCode?: StringNullableFilter;
};
