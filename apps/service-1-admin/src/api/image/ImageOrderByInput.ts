import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
