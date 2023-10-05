import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { JobTitle } from "../job/JobTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="job.id" reference="Job" label="Job">
          <SelectInput optionText={JobTitle} />
        </ReferenceInput>
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
