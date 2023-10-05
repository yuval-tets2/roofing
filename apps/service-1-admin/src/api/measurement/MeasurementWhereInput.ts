import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type MeasurementWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  total?: FloatFilter;
  typeField?: StringFilter;
  unitOfMeasurement?: StringFilter;
  updatedAt?: DateTimeFilter;
};
