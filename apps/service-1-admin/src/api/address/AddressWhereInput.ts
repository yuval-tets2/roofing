import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  county?: StringNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  state?: StringNullableFilter;
  street1?: StringNullableFilter;
  street2?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
