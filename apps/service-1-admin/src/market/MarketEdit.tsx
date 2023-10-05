import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";

export const MarketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cities"
          reference="City"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
