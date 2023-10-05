import { SortOrder } from "../../util/SortOrder";

export type MeasurementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  total?: SortOrder;
  typeField?: SortOrder;
  unitOfMeasurement?: SortOrder;
  updatedAt?: SortOrder;
};
