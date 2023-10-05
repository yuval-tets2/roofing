import { Job } from "../job/Job";
import { LineItem } from "../lineItem/LineItem";

export type Bid = {
  companyId: string;
  createdAt: Date;
  id: string;
  job?: Job;
  lineItems?: Array<LineItem>;
  quoteUrl: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
