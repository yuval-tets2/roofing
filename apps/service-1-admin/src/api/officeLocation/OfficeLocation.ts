import { Company } from "../company/Company";
import { Pricing } from "../pricing/Pricing";

export type OfficeLocation = {
  city: string;
  company?: Company;
  country: string;
  createdAt: Date;
  description: string | null;
  email: string;
  foundingYear: number | null;
  id: string;
  logo: string | null;
  logoStatus: string | null;
  name: string;
  phoneNumber: string | null;
  pricing?: Array<Pricing>;
  state: string | null;
  status: string | null;
  street1: string | null;
  street2: string | null;
  updatedAt: Date;
  zipCode: string | null;
};
