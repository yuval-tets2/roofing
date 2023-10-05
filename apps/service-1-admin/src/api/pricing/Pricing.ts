import { OfficeLocation } from "../officeLocation/OfficeLocation";

export type Pricing = {
  createdAt: Date;
  id: string;
  officeLocation?: OfficeLocation;
  price: number;
  roofingMaterialId: string;
  status: string;
  typeField: string;
  updatedAt: Date;
};
