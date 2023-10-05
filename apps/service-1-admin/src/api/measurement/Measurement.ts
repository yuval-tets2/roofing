import { Job } from "../job/Job";

export type Measurement = {
  createdAt: Date;
  id: string;
  job?: Job;
  total: number;
  typeField: string;
  unitOfMeasurement: string;
  updatedAt: Date;
};
