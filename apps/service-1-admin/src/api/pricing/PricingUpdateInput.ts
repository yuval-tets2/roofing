import { OfficeLocationWhereUniqueInput } from "../officeLocation/OfficeLocationWhereUniqueInput";

export type PricingUpdateInput = {
  officeLocation?: OfficeLocationWhereUniqueInput;
  price?: number;
  roofingMaterialId?: string;
  status?: string;
  typeField?: string;
};
