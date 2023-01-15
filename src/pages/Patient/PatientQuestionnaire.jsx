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
} from "@mantine/core";
import { DatePicker, getYearsRange } from "@mantine/dates";
import { useForm } from "@mantine/form";
import QuestionnaireHeader from "./QuestionnaireHeader";
import { Container } from "react-bootstrap";
import InformationTable from "./InformationTable";

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const useStyles = createStyles((theme) => ({
  flexWrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : "#f7fafc",
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },
  boxDesign: {
    display: "flex",
    background: "#f7fafc",
    padding: "20px 20px 20px 20px",
    borderRadius: "20px",
    borderColor: "#E2E8F0",
    borderWidth: "2px",
    boxShadow: "rgb(112 144 176 / 8%) 45px 76px 113px 7px",
    margin: "10px",
  },
}));

const PatientQuestionnaire = ({ state, setState, setAutoLogout }) => {
  const [active, setActive] = useState(0);
  const { classes } = useStyles();
  const [patientInformation, setPatientInformation] = useState({});

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
      weight: null,
      height: null,
      bloodGroup: "",
      allergies: "",
      isPregnant: "",
      smoking: "",
      alcohol: "",
      pastDrugs: "",
      pastDrugsExplanation: "",
      bloodPressure: "",
      heartDiseases: "",
      heartDiseaseExplanation: "",
      bloodDiseases: "",
      bloodDiseasesExplanation: "",
      diabetes: "",
      insulin: "",
      insulinName: "",
      asthma: "",
      asthmaPump: "",
      asthmaPumpName: "",
      respiraroryDiseases: "",
      respiraroryDiseasesExplanation: "",
      thyroidDiseases: "",
      thyroidDiseasesExplanation: "",
      liverDiseases: "",
      liverDiseasesExplanation: "",
      kidneyDiseases: "",
      kidneyDiseasesExplanation: "",
      nervousSystemDiseases: "",
      nervousSystemDiseasesExplanation: "",
      anyOther: "",
    },

    validate: (values) => {
      if (active === 0) {
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

      if (active === 1) {
        return {};
      }

      return {};
    },
  });

  const getYearsRange = (birth, today) => {
    const years = today.getFullYear() - birth.getFullYear();
    const months = today.getMonth() - birth.getMonth();
    const days = today.getDate() - birth.getDate();
    return [
      years,
      years * 12 + months,
      years * 12 + months * 30 + days,
      years * 12 + months * 30 + days * 24,
    ];
  }


  const getInfoCleaned = (patientInfo) => {
    const {
      name,
      birth,
      address,
      city,
      country,
      pincode,
      phone,
      profession,
      weight,
      height,
      bloodGroup,
      allergies,
      isPregnant,
      smoking,
      alcohol,
      pastDrugs,
      pastDrugsExplanation,
      bloodPressure,
      heartDiseases,
      heartDiseaseExplanation,
      bloodDiseases,
      bloodDiseasesExplanation,
      diabetes,
      insulin,
      insulinName,
      asthma,
      asthmaPump,
      asthmaPumpName,
      respiraroryDiseases,
      respiraroryDiseasesExplanation,
      thyroidDiseases,
      thyroidDiseasesExplanation,
      liverDiseases,
      liverDiseasesExplanation,
      kidneyDiseases,
      kidneyDiseasesExplanation,
      nervousSystemDiseases,
      nervousSystemDiseasesExplanation,
      anyOther,
    } = patientInfo;

    const finalInformation = {
      name: {
        "response": false,
        "description": name
      },
      age: {
        "response": false,
        "description": getYearsRange(new Date(birth), new Date())[0]
      },
      address: {
        "response": false,
        "description": address
      },
      city: {
        "response": false,
        "description": city
      },
      country: {
        "response": false,
        "description": country
      },
      pincode: {
        "response": false,
        "description": pincode
      },
      phone: {
        "response": false,
        "description": phone
      },
      profession: {
        "response": false,
        "description": profession
      },
      weight: {
        "response": false,
        "description": weight
      },
      height: {
        "response": false,
        "description": height
      },
      bloodGroup: {
        "response": false,
        "description": bloodGroup
      },
      allergies: {
        "response": true,
        "description": allergies
      },
      isPregnant: {
        "response": true,
        "description": isPregnant === "Yes" ? true : false,
      },

      // address,
      // city,
      // country,
      // pincode,
      // phone,
      // profession,
      // weight,
      // height,
      // bloodGroup,
      // allergies,
      // isPregnant: isPregnant === "Yes" ? true : false,
      smoking: {
        "response": smoking !== "never-smoke" ? true : false,
        "description": smoking
      },
      alcohol: {
        "response": alcohol !== "never-alcohol" ? true : false,
        "description": alcohol
      },
      pastDrugs: {
        "response": pastDrugs === "yes-pastDrugs" ? true : false,
        "description": pastDrugsExplanation
      },
      bloodPressure: {
        "response": bloodPressure === "yes-bloodPressure" ? true : false,
        "description": bloodPressure
      },
      heartDiseases: {
        "response": heartDiseases === "yes-heartDisease" ? true : false,
        "description": heartDiseaseExplanation
      },
      bloodDiseases: {
        "response": bloodDiseases === "yes-bloodDiseases" ? true : false,
        "description": bloodDiseasesExplanation
      },
      diabetes: {
        "response": diabetes === "yes-diabetes" ? true : false,
        "description": diabetes + " " + insulin + " " + insulinName
      },
      asthma: {
        "response": asthma === "yes-asthma" ? true : false,
        "description": asthma + " " + asthmaPump + " " + asthmaPumpName
      },
      respiraroryDiseases: {
        "response": respiraroryDiseases === "yes-respiraroryDiseases" ? true : false,
        "description": respiraroryDiseasesExplanation
      },
      thyroidDiseases: {
        "response": thyroidDiseases === "yes-thyroidDiseases" ? true : false,
        "description": thyroidDiseasesExplanation
      },
      liverDiseases: {
        "response": liverDiseases === "yes-liverDiseases" ? true : false,
        "description": liverDiseasesExplanation
      },
      kidneyDiseases: {
        "response": kidneyDiseases === "yes-kidneyDiseases" ? true : false,
        "description": kidneyDiseasesExplanation
      },
      nervousSystemDiseases: {
        "response": nervousSystemDiseases === "yes-nervousSystemDiseases" ? true : false,
        "description": nervousSystemDiseasesExplanation
      },
      anyOther: {
        "response": anyOther === "yes-anyOther" ? true : false,
        "description": anyOther
      },
    };
    return finalInformation;
  };

  const nextStep = () =>
    setActive((current) => {
      const hh = form.validate();
      if (hh.hasErrors) {
        console.log("Errors");
        return current;
      }
      else {

        if (current === 2) {
          const patientInfo = form.values;
          const finalInformation = getInfoCleaned(patientInfo);
          setPatientInformation(finalInformation);
          console.log(patientInfo);
        }

        return current < 3 ? current + 1 : current;
      }
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const savePatientInfo = async (patientInfo) => {
    console.log("Saving patient info", patientInfo);
    const res = await fetch(`${BACKEND_URL}/patient/info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
      body: JSON.stringify({
        patientInfo: patientInfo,
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
    const patientInfo = form.values;

    savePatientInfo(patientInformation);
    console.log(patientInformation, 'patientInformation');

    window.location.href = "/patient/home";
  };

  return (
    <div
      style={
        {
          // background: 'white',
        }
      }
    >
      <QuestionnaireHeader />

      <Container
        style={{
          backgroundColor: "#f7fafc",
          padding: "20px 0 20px 0",
          margin: "0 auto",
        }}
      >
        <Stepper active={active} breakpoint="sm">
          <Stepper.Step
            label="First step"
            description="Patient Personal Information"
          >
            <TextInput
              label="Name"
              placeholder="Name"
              {...form.getInputProps("name")}
              withAsterisk
            />
            <DatePicker
              placeholder="Pick date"
              label="Birth Date"
              withAsterisk
            />
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
          </Stepper.Step>

          <Stepper.Step
            label="Second step"
            description="Basic Medical Information"
          >
            <NumberInput
              label="Height"
              placeholder="Height"
              {...form.getInputProps("height")}
            />
            <NumberInput
              mt="md"
              label="Weight"
              placeholder="Weight"
              {...form.getInputProps("weight")}
            />
            <TextInput
              mt="md"
              label="Blood Group"
              placeholder="Blood Group"
              {...form.getInputProps("bloodGroup")}
            />
            <Textarea
              mt="md"
              label="Allergies"
              placeholder="List Your Allergies Down Here"
              {...form.getInputProps("allergies")}
            />
            <NativeSelect
              mt="md"
              data={["No", "Yes"]}
              label="Are you pregnant?"
              placeholder=""
              {...form.getInputProps("isPregnant")}
            />
            <Radio.Group
              name="smoking"
              label="How often do you smoke?"
              withAsterisk
              {...form.getInputProps("smoking")}
            >
              <Radio value="daily-smoke" label="Daily" />
              <Radio value="weekly-smoke" label="Weekly" />
              <Radio value="monthly-smoke" label="Monthly" />
              <Radio value="occasionally-smoke" label="Occasionally" />
              <Radio value="never-smoke" label="Never" />
            </Radio.Group>
            <Radio.Group
              name="alcohol"
              label="How often do you consume alcohol?"
              withAsterisk
              {...form.getInputProps("alcohol")}
            >
              <Radio value="daily-alcohol" label="Daily" />
              <Radio value="weekly-alcohol" label="Weekly" />
              <Radio value="monthly-alcohol" label="Monthly" />
              <Radio value="occasionally-alcohol" label="Occasionally" />
              <Radio value="never-alcohol" label="Never" />
            </Radio.Group>
            <Radio.Group
              mt="md"
              label="Have you used any kind of illegal drugs or have you ever used them?"
              {...form.getInputProps("pastDrugs")}
            >
              <Radio value="yes-pastdrugs" label="Yes" />
              <Radio value="no-pastdrugs" label="No" />
            </Radio.Group>
            {form.values.pastDrugs === "yes-pastdrugs" && (
              <Textarea
                mt="md"
                placeholder="If yes, please specify"
                {...form.getInputProps("pastDrugsExplanation")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Raised Blood Pressure?"
              {...form.getInputProps("bloodPressure")}
            >
              <Radio value="yes-bloodPressure" label="Yes" />
              <Radio value="no-bloodPressure" label="No" />
            </Radio.Group>
            <Radio.Group
              mt="md"
              label="Heart Dieases?"
              {...form.getInputProps("heartDieases")}
            >
              <Radio value="yes-heartDieases" label="Yes" />
              <Radio value="no-heartDieases" label="No" />
            </Radio.Group>
            {form.values.heartDieases === "yes-heartDieases" && (
              <Textarea
                mt="md"
                label="Please write what exactly:"
                {...form.getInputProps("heartDieasesExplanation")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Bloodstream or blood vessel diseases?"
              {...form.getInputProps("bloodDiseases")}
            >
              <Radio value="yes-bloodDiseases" label="Yes" />
              <Radio value="no-bloodDiseases" label="No" />
            </Radio.Group>
            {form.values.bloodDiseases === "yes-bloodDiseases" && (
              <Textarea
                mt="md"
                label="Please write what exactly:"
                {...form.getInputProps("bloodDiseasesExplanation")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Lungs and respiratory system diseases?"
              {...form.getInputProps("respiraroryDiseases")}
            >
              <Radio value="yes-respiraroryDiseases" label="Yes" />
              <Radio value="no-respiraroryDiseases" label="No" />
            </Radio.Group>
            {form.values.respiraroryDiseases === "yes-respiraroryDiseases" && (
              <Textarea
                mt="md"
                label="Please write what exactly:"
                {...form.getInputProps("respiraroryDiseasesExplanation")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Asthma?"
              {...form.getInputProps("asthma")}
            >
              <Radio value="yes-asthma" label="Yes" />
              <Radio value="no-asthma" label="No" />
            </Radio.Group>
            {form.values.asthma === "yes-asthma" && (
              <Radio.Group
                mt="md"
                label="Are You Using a Pump?"
                {...form.getInputProps("asthmaPump")}
              >
                <Radio value="yes-asthmaPump" label="Yes" />
                <Radio value="no-asthmaPump" label="No" />
              </Radio.Group>
            )}
            {form.values.asthmaPump === "yes-asthmaPump" && (
              <TextInput
                mt="md"
                placeholder="Pump's name:"
                {...form.getInputProps("asthamPumpName")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Liver diseases?"
              {...form.getInputProps("liverDiseases")}
            >
              <Radio value="yes-liverDiseases" label="Yes" />
              <Radio value="no-liverDiseases" label="No" />
            </Radio.Group>
            {form.values.liverDiseases === "yes-liverDiseases" && (
              <Textarea
                mt="md"
                placeholder="Please write what exactly:"
                {...form.getInputProps("liverDiseasesExplanation")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Diabetes?"
              {...form.getInputProps("diabetes")}
            >
              <Radio value="yes-diabetes" label="Yes" />
              <Radio value="no-diabetes" label="No" />
            </Radio.Group>
            {form.values.diabetes === "yes-diabetes" && (
              <Radio.Group
                mt="md"
                label="Are You Taking Insulin?"
                {...form.getInputProps("insulin")}
              >
                <Radio value="yes-insulin" label="Yes" />
                <Radio value="no-insulin" label="No" />
              </Radio.Group>
            )}
            {form.values.insulin === "yes-insulin" && (
              <Textarea
                mt="md"
                placeholder="Insulin name:"
                {...form.getInputProps("insulinName")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Thyroid diseases?"
              {...form.getInputProps("thyroidDiseases")}
            >
              <Radio value="yes-thyroidDiseases" label="Yes" />
              <Radio value="no-thyroidDiseases" label="No" />
            </Radio.Group>
            {form.values.thyroidDiseases === "yes-thyroidDiseases" && (
              <Textarea
                mt="md"
                placeholder="Please write what exactly:"
                {...form.getInputProps("thyroidDiseasesExplanation")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Kidney or urinary pathways diseases?"
              {...form.getInputProps("kidneyDiseases")}
            >
              <Radio value="yes-kidneyDiseases" label="Yes" />
              <Radio value="no-kidneyDiseases" label="No" />
            </Radio.Group>
            {form.values.kidneyDiseases === "yes-kidneyDiseases" && (
              <Textarea
                mt="md"
                placeholder="Please write what exactly:"
                {...form.getInputProps("kidneyDiseasesExplanation")}
              />
            )}
            <Radio.Group
              mt="md"
              label="Nervous system disease?"
              {...form.getInputProps("nervousSystemDiseases")}
            >
              <Radio value="yes-nervousSystemDiseases" label="Yes" />
              <Radio value="no-nervousSystemDiseases" label="No" />
            </Radio.Group>
            {form.values.nervousSystemDiseases ===
              "yes-nervousSystemDiseases" && (
                <Textarea
                  mt="md"
                  placeholder="Please write what exactly:"
                  {...form.getInputProps("nervousSystemDiseasesExplanation")}
                />
              )}
          </Stepper.Step>

          <Stepper.Step
            label="Final step"
            description="Additional Medical Information"
          >
            <Textarea
              label="Do you have any other medical problem that was not mentioned earlier in this questionnaire?"
              placeholder="Please write it here:"
              {...form.getInputProps("anyOther")}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed! Form values:
            <InformationTable data={form.values} />
            {/* <Code block mt="xl">
              {JSON.stringify(form.values, null, 2)}
            </Code> */}
          </Stepper.Completed>
        </Stepper>

        <Group position="right" mt="xl">
          {active !== 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
          {active === 3 && <Button onClick={submit}>Submit</Button>}
        </Group>
      </Container>
    </div>
  );
};

export default PatientQuestionnaire;
