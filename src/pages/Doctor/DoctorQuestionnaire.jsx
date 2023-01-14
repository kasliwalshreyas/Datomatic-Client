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

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const DoctorQuestionnaire = ({ state, setState, setAutoLogout }) => {

  const form = useForm({
    initialValues: {
      name: "",
      birth: "",
      address: "",
      city: "",
      country: "",
      pincode: null,
      phone: null,
      profession: "",
    },

    validate: (values) => {
      return {
        name:
          values.name.trim().length < 2
            ? "Name must include at least 2 characters"
            : null,
        address: values.address.length <= 0 ? "Enter Address" : null,
        city: values.city.length <= 0 ? "Enter City" : null,
        country: values.country.length <= 0 ? "Enter Country" : null,
        pincode: values.pincode ? null : "Enter Pincode",
        phone: values.phone ? null : "Enter Phone Number",
      };
    }

  });

  const saveDoctorInfo = async (doctorInfo) => {
    const res = await fetch(`${BACKEND_URL}/doctor/info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
      body: JSON.stringify({
        doctorInfo: doctorInfo,
      }),
    });

    const resData = await res.json();

    if (res.status === 401) {
      console.log(resData.message || "Authorization failed");
      return;
    }

    if (res.status === 422) {
      console.log(resData.message || "Validation failed");
      return;
    }

    if (res.status !== 200 && res.status !== 201) {
      console.log(resData.message || "Fetching name failed.");
      return;
    }
  };

  const submit = () => {
    if (form.validate().hasErrors) {
      return;
    }
    else {
      const doctorInfo = form.values;
      saveDoctorInfo(doctorInfo);
      window.location.href = "/home";
    }

  };


  return (
    <div>
      <QuestionnaireHeader />
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
        <NativeSelect
          data={["Family Medicine Physician", "Pediatrician", "Obstetrician/Gynecologist", "Surgeon", "Cardiologist", "Dermatologist", "Neurologist", "Oncologist", "Ophthalmologist", "Orthopedic Surgeon", "Otolaryngologist (ENT)", "Pathologist", "Psychiatrist", "Radiologist", "Urologist", "Anesthesiologist", "Emergency Medicine Physician", "Rheumatologist", "Gastroenterologist", "Nephrologist", "Pulmonologist", "Endocrinologist"]}
          label="Speciality"
          placeholder="Speciality"
          {...form.getInputProps("speciality")}
          withAsterisk
        />
        <Group position="right" mt="xl">
          {<Button onClick={submit} >Submit</Button>}
        </Group>
      </Container>
    </div >
  );
};

export default DoctorQuestionnaire;
