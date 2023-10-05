import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RoofingMaterialTitle } from "../roofingMaterial/RoofingMaterialTitle";

export const ColorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
