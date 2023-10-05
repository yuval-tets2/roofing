import { OfficeLocationWhereInput } from "./OfficeLocationWhereInput";
import { OfficeLocationOrderByInput } from "./OfficeLocationOrderByInput";

export type OfficeLocationFindManyArgs = {
  where?: OfficeLocationWhereInput;
  orderBy?: Array<OfficeLocationOrderByInput>;
  skip?: number;
  take?: number;
};
