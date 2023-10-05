import { SortOrder } from "../../util/SortOrder";

export type LineItemOrderByInput = {
  bidId?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  roofingTypeId?: SortOrder;
  updatedAt?: SortOrder;
  wasteFactor?: SortOrder;
};
