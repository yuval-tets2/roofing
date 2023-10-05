import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ImageCreateInput = {
  job: JobWhereUniqueInput;
  typeField: string;
  url: string;
};
