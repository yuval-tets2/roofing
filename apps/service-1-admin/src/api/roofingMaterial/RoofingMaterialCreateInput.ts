import { ColorCreateNestedManyWithoutRoofingMaterialsInput } from "./ColorCreateNestedManyWithoutRoofingMaterialsInput";

export type RoofingMaterialCreateInput = {
  colors?: ColorCreateNestedManyWithoutRoofingMaterialsInput;
  description?: string | null;
  manufacturer: string;
  maxLifespan: number;
  minLifespan: number;
  name: string;
  status: string;
  supplier: string;
};
