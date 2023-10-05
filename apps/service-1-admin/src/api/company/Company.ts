import { OfficeLocation } from "../officeLocation/OfficeLocation";

export type Company = {
  city: string;
  country: string;
  createdAt: Date;
  description: string | null;
  email: string;
  foundingYear: number | null;
  id: string;
  logo: string | null;
  logoStatus: string | null;
  name: string;
  officeLocations?: Array<OfficeLocation>;
  phoneNumber: string | null;
  state: string | null;
  status: string | null;
  street1: string | null;
  street2: string | null;
  updatedAt: Date;
  zipCode: string | null;
};
