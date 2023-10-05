import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  county?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  state?: SortOrder;
  street1?: SortOrder;
  street2?: SortOrder;
  zipCode?: SortOrder;
};
