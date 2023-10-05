import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { LineItemUpdateManyWithoutBidsInput } from "./LineItemUpdateManyWithoutBidsInput";

export type BidUpdateInput = {
  companyId?: string;
  job?: JobWhereUniqueInput;
  lineItems?: LineItemUpdateManyWithoutBidsInput;
  quoteUrl?: string | null;
  startDate?: Date | null;
};
