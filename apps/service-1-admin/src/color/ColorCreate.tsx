import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RoofingMaterialTitle } from "../roofingMaterial/RoofingMaterialTitle";

export const ColorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Color" source="color" />
        <TextInput label="Picture Url" source="pictureUrl" />
        <ReferenceInput
          source="roofingMaterial.id"
          reference="RoofingMaterial"
          label="Roofing Material"
        >
          <SelectInput optionText={RoofingMaterialTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
