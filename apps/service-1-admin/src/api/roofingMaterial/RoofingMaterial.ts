import { Color } from "../color/Color";

export type RoofingMaterial = {
  colors?: Array<Color>;
  createdAt: Date;
  description: string | null;
  id: string;
  manufacturer: string;
  maxLifespan: number;
  minLifespan: number;
  name: string;
  status: string;
  supplier: string;
  updatedAt: Date;
};
