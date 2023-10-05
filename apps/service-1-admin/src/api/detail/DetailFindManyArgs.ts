import { DetailWhereInput } from "./DetailWhereInput";
import { DetailOrderByInput } from "./DetailOrderByInput";

export type DetailFindManyArgs = {
  where?: DetailWhereInput;
  orderBy?: Array<DetailOrderByInput>;
  skip?: number;
  take?: number;
};
