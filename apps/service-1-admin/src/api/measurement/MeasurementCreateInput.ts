import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type MeasurementCreateInput = {
  job: JobWhereUniqueInput;
  total: number;
  typeField: string;
  unitOfMeasurement: string;
};
