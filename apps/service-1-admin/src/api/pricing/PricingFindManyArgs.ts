import { PricingWhereInput } from "./PricingWhereInput";
import { PricingOrderByInput } from "./PricingOrderByInput";

export type PricingFindManyArgs = {
  where?: PricingWhereInput;
  orderBy?: Array<PricingOrderByInput>;
  skip?: number;
  take?: number;
};
