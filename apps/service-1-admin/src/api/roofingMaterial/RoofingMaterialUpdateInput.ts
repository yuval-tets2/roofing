import { ColorUpdateManyWithoutRoofingMaterialsInput } from "./ColorUpdateManyWithoutRoofingMaterialsInput";

export type RoofingMaterialUpdateInput = {
  colors?: ColorUpdateManyWithoutRoofingMaterialsInput;
  description?: string | null;
  manufacturer?: string;
  maxLifespan?: number;
  minLifespan?: number;
  name?: string;
  status?: string;
  supplier?: string;
};
