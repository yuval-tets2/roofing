import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MarketTitle } from "../market/MarketTitle";

export const CityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="market.id" reference="Market" label="Market">
          <SelectInput optionText={MarketTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Roofing Material Ids" source="roofingMaterialIds" />
        <TextInput label="State" source="state" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
