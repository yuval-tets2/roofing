import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ColorTitle } from "../color/ColorTitle";

export const RoofingMaterialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="colors"
          reference="Color"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ColorTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <TextInput label="Manufacturer" source="manufacturer" />
        <NumberInput label="Max Lifespan" source="maxLifespan" />
        <NumberInput label="Min Lifespan" source="minLifespan" />
        <TextInput label="Name" source="name" />
        <TextInput label="Status" source="status" />
        <TextInput label="Supplier" source="supplier" />
      </SimpleForm>
    </Edit>
  );
};
