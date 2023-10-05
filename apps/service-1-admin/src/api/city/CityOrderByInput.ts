import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  marketId?: SortOrder;
  name?: SortOrder;
  roofingMaterialIds?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
