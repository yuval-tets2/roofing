import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReportCreateInput = {
  job: JobWhereUniqueInput;
  typeField: string;
  url: string;
};
