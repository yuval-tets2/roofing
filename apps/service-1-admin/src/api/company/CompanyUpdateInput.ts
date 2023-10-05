import { OfficeLocationUpdateManyWithoutCompaniesInput } from "./OfficeLocationUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  city?: string;
  country?: string;
  description?: string | null;
  email?: string;
  foundingYear?: number | null;
  logo?: string | null;
  logoStatus?: string | null;
  name?: string;
  officeLocations?: OfficeLocationUpdateManyWithoutCompaniesInput;
  phoneNumber?: string | null;
  state?: string | null;
  status?: string | null;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
};
