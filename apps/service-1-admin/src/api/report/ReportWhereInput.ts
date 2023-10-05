import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReportWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  typeField?: StringFilter;
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
