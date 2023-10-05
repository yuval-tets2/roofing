import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { OfficeLocationWhereUniqueInput } from "../officeLocation/OfficeLocationWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type PricingWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  officeLocation?: OfficeLocationWhereUniqueInput;
  price?: FloatFilter;
  roofingMaterialId?: StringFilter;
  status?: StringFilter;
  typeField?: StringFilter;
  updatedAt?: DateTimeFilter;
};
