import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { LineItemCreateNestedManyWithoutBidsInput } from "./LineItemCreateNestedManyWithoutBidsInput";

export type BidCreateInput = {
  companyId: string;
  job: JobWhereUniqueInput;
  lineItems?: LineItemCreateNestedManyWithoutBidsInput;
  quoteUrl?: string | null;
  startDate?: Date | null;
};
