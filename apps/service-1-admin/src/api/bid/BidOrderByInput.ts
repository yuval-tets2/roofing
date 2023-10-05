import { SortOrder } from "../../util/SortOrder";

export type BidOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  quoteUrl?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
