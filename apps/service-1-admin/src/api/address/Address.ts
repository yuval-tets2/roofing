import { Job } from "../job/Job";

export type Address = {
  city: string | null;
  county: string | null;
  id: string;
  job?: Job;
  state: string | null;
  street1: string | null;
  street2: string | null;
  zipCode: string | null;
};
