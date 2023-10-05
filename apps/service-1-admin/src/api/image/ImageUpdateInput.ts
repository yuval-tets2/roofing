import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ImageUpdateInput = {
  job?: JobWhereUniqueInput;
  typeField?: string;
  url?: string;
};
