import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type MeasurementUpdateInput = {
  job?: JobWhereUniqueInput;
  total?: number;
  typeField?: string;
  unitOfMeasurement?: string;
};
