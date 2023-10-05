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

import { JobTitle } from "../job/JobTitle";

export const MeasurementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <NumberInput label="Total" source="total" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Unit Of Measurement" source="unitOfMeasurement" />
      </SimpleForm>
    </Create>
  );
};
