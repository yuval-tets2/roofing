import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type AddressCreateInput = {
  city?: string | null;
  county?: string | null;
  job: JobWhereUniqueInput;
  state?: string | null;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
};
