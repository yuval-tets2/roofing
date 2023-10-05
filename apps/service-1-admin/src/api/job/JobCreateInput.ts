import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BidCreateNestedManyWithoutJobsInput } from "./BidCreateNestedManyWithoutJobsInput";
import { ImageCreateNestedManyWithoutJobsInput } from "./ImageCreateNestedManyWithoutJobsInput";
import { MeasurementCreateNestedManyWithoutJobsInput } from "./MeasurementCreateNestedManyWithoutJobsInput";
import { ReportCreateNestedManyWithoutJobsInput } from "./ReportCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  address?: AddressWhereUniqueInput | null;
  addressId?: string | null;
  bids?: BidCreateNestedManyWithoutJobsInput;
  images?: ImageCreateNestedManyWithoutJobsInput;
  measurements?: MeasurementCreateNestedManyWithoutJobsInput;
  reports?: ReportCreateNestedManyWithoutJobsInput;
  selectedBidAt?: Date | null;
  selectedBidId?: string | null;
  status: string;
  userId: string;
};
