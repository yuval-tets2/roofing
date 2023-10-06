import { SsWhereInput } from "./SsWhereInput";
import { SsOrderByInput } from "./SsOrderByInput";

export type SsFindManyArgs = {
  where?: SsWhereInput;
  orderBy?: Array<SsOrderByInput>;
  skip?: number;
  take?: number;
};
