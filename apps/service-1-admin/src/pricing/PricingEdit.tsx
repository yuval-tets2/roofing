import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { OfficeLocationTitle } from "../officeLocation/OfficeLocationTitle";

export const PricingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
