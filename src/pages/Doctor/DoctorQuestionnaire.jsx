import { useState } from "react";
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  createStyles,
  Box,
  Textarea,
  NumberInput,
  NativeSelect,
  Radio,
  Container,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import QuestionnaireHeader from "./QuestionnaireHeader";


const DoctorQuestionnaire = () => {
  return (
    <div>
      <Container>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
          withAsterisk
        />
        <DatePicker placeholder="Pick date" label="Birth Date" withAsterisk />
        <Textarea
          placeholder="Your Address"
          label="Your Address"
          withAsterisk
          {...form.getInputProps("address")}
        />
        <TextInput
          label="City"
          placeholder="City"
          withAsterisk
          {...form.getInputProps("city")}
        />
        <TextInput
          label="Country"
          placeholder="Country"
          withAsterisk
          {...form.getInputProps("country")}
        />
        <NumberInput
          label="Postal Code"
          placeholder="Postal Code"
          withAsterisk
          {...form.getInputProps("pincode")}
        />
        <NumberInput
          label="Phone Number"
          placeholder="Phone Number"
          withAsterisk
          {...form.getInputProps("phone")}
        />
        <TextInput
          label="Profession"
          placeholder="Profession"
          {...form.getInputProps("profession")}
        />
      </Container>
    </div>
  );
};

export default DoctorQuestionnaire;
