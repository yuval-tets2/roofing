import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { PricingUpdateManyWithoutOfficeLocationsInput } from "./PricingUpdateManyWithoutOfficeLocationsInput";

export type OfficeLocationUpdateInput = {
  city?: string;
  company?: CompanyWhereUniqueInput;
  country?: string;
  description?: string | null;
  email?: string;
  foundingYear?: number | null;
  logo?: string | null;
  logoStatus?: string | null;
  name?: string;
  phoneNumber?: string | null;
  pricing?: PricingUpdateManyWithoutOfficeLocationsInput;
  state?: string | null;
  status?: string | null;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
};
