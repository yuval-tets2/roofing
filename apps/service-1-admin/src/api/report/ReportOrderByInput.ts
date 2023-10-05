import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
