import { RoofingMaterial } from "../roofingMaterial/RoofingMaterial";

export type Color = {
  color: string;
  createdAt: Date;
  id: string;
  pictureUrl: string | null;
  roofingMaterial?: RoofingMaterial;
  status: string;
  updatedAt: Date;
};
