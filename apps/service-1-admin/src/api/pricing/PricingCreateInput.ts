import { OfficeLocationWhereUniqueInput } from "../officeLocation/OfficeLocationWhereUniqueInput";

export type PricingCreateInput = {
  officeLocation: OfficeLocationWhereUniqueInput;
  price: number;
  roofingMaterialId: string;
  status: string;
  typeField: string;
};
