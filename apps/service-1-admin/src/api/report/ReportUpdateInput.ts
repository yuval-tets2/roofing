import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ReportUpdateInput = {
  job?: JobWhereUniqueInput;
  typeField?: string;
  url?: string;
};
