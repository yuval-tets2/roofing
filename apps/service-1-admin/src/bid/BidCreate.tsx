import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";
import { LineItemTitle } from "../lineItem/LineItemTitle";

export const BidCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Company Id" source="companyId" />
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="lineItems"
          reference="LineItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LineItemTitle} />
        </ReferenceArrayInput>
        <TextInput label="Quote Url" source="quoteUrl" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
