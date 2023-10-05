import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { OfficeLocationTitle } from "../officeLocation/OfficeLocationTitle";

export const PricingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="officeLocation.id"
          reference="OfficeLocation"
          label="Office Location"
        >
          <SelectInput optionText={OfficeLocationTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <TextInput label="Roofing Material Id" source="roofingMaterialId" />
        <TextInput label="Status" source="status" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
