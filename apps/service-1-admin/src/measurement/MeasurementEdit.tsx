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

import { JobTitle } from "../job/JobTitle";

export const MeasurementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <NumberInput label="Total" source="total" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Unit Of Measurement" source="unitOfMeasurement" />
      </SimpleForm>
    </Edit>
  );
};
