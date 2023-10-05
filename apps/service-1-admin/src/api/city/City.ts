import { Market } from "../market/Market";

export type City = {
  createdAt: Date;
  id: string;
  market?: Market;
  name: string;
  roofingMaterialIds: string;
  state: string | null;
  status: string;
  updatedAt: Date;
};
