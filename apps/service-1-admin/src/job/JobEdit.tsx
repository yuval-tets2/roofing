import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { BidTitle } from "../bid/BidTitle";
import { ImageTitle } from "../image/ImageTitle";
import { MeasurementTitle } from "../measurement/MeasurementTitle";
import { ReportTitle } from "../report/ReportTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <TextInput label="Address Id" source="addressId" />
        <ReferenceArrayInput
          source="bids"
          reference="Bid"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BidTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="images"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="measurements"
          reference="Measurement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MeasurementTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Selected Bid At" source="selectedBidAt" />
        <TextInput label="Selected Bid Id" source="selectedBidId" />
        <TextInput label="Status" source="status" />
        <TextInput label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
