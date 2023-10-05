import { SortOrder } from "../../util/SortOrder";

export type PricingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  officeLocationId?: SortOrder;
  price?: SortOrder;
  roofingMaterialId?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
