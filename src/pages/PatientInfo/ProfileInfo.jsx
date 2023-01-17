import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import PatientInformationDetails from "./PatientInformationDetails";

const ProfileInfo = ({ data }) => {
  // const keys = Object.keys(data);
  console.log(data, "data from ProfileInfo");
  const {
    personalInformation,
    basicMedicalInformation,
    detailMedicalInformation,
  } = data;
  console.log(personalInformation, "personalInformation");
  console.log(basicMedicalInformation, "basicMedicalInformation");
  console.log(detailMedicalInformation, "detailMedicalInformation");

  return (
    <Flex p={6}>
      <Box
        h={"86vh"}
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {personalInformation.name.description}
        </Heading>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Center height="50px">
            <Badge mx={14}>Age</Badge>
            <Badge mx={14}>{personalInformation.age.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={12}>Height</Badge>
            <Badge mx={12}>{personalInformation.height.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={12}>Weight</Badge>
            <Badge mx={12}>{personalInformation.weight.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={8}>Blood Group</Badge>
            <Badge mx={8}>{personalInformation.bloodGroup.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={8}>Smoking</Badge>
            <Badge mx={8}>{basicMedicalInformation.smoking.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={8}>Alcohol</Badge>
            <Badge mx={8}>{basicMedicalInformation.alcohol.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={8}>Raised Blood Pressure</Badge>
            <Badge mx={8}>
              {basicMedicalInformation.bloodPressure.description}
            </Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={8}>Is Pregnant</Badge>
            <Badge mx={8}>
              {basicMedicalInformation.isPregnant.description}
            </Badge>
          </Center>
        </Stack>
      </Box>
      <Box
        style={{ overflowY: "scroll" }}
        h={"86vh"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        ml={6}
        textAlign={"center"}
      >
        <PatientInformationDetails data={detailMedicalInformation} />
      </Box>
    </Flex>
  );
};

export default ProfileInfo;
