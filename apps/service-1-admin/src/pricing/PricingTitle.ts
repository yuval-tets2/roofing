import { Pricing as TPricing } from "../api/pricing/Pricing";

export const PRICING_TITLE_FIELD = "roofingMaterialId";

export const PricingTitle = (record: TPricing): string => {
  return record.roofingMaterialId?.toString() || String(record.id);
};
