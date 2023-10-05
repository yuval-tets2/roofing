import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <TextField label="County" source="county" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Job" source="job.id" reference="Job">
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="State" source="state" />
        <TextField label="Street1" source="street1" />
        <TextField label="Street2" source="street2" />
        <TextField label="Zip Code" source="zipCode" />
      </SimpleShowLayout>
    </Show>
  );
};
