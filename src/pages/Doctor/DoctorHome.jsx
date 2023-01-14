import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Badge,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Textarea,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import { Modal } from "react-bootstrap";
import { FcLock } from "react-icons/fc";
import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import PrescriptionCard from "../../components/Prescription/PrescriptionCard";
import MedicinalRow from "../../components/Form/MedicinalRow.jsx";
import StatsCard from "../../components/Dashboard/StatsCard";
import AppointmentTable from "../../components/Dashboard/AppointmentTable";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const DoctorHome = ({ state, setState, setAutoLogout }) => {
  // useNavigate
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastMonthPrescriptions, setLastMonthPrescriptions] = useState("");
  const [patientCount, setPatientCount] = useState("");

  useEffect(() => {
    getDoctorInfo();
    getName();
    getLastMonthPrescriptions();
    getPatientCount();
  }, []);

  const getDoctorInfo = async () => {
    const res = await fetch(`${BACKEND_URL}/doctor/info`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
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

    if (!resData.doctorInfo.extraInfo) {
      navigate("/doctor/questionnaire");
    }
  };

  const getName = async () => {
    const res = await fetch(`${BACKEND_URL}/data/name`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
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

    setName(resData.name);
  };

  const getLastMonthPrescriptions = async () => {
    const res = await fetch(`${BACKEND_URL}/doctor/last-month-prescriptions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
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

    setLastMonthPrescriptions(resData.prescriptionsInLastMonth);
  };

  const getPatientCount = async () => {
    const res = await fetch(`${BACKEND_URL}/doctor/patient-count`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
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

    setPatientCount(resData.patientCount);
  };

  const [isOpen, setIsOpen] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef(null);

  var date1 = new Date();
  var date2 = new Date(new Date().setDate(date1.getDate() - 30));
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Flex flexWrap={"wrap"} padding={"10px"} flexDirection={"column"}>
      <Flex>
        <Stat
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          minWidth={"300px"}
          overflowWrap={"break-word"}
          backgroundColor={"rgb(255, 255, 255)"}
          borderRadius={"20px"}
          borderColor={"#E2E8F0"}
          borderWidth={"1px"}
          margin={"10px"}
          padding={"15px 20px"}
        >
          <Box>
            <HStack spacing={"24px"}>
              <Box width={"full"}>
                <StatLabel>Prescriptions</StatLabel>
                <StatNumber>{lastMonthPrescriptions}</StatNumber>
                <StatHelpText>
                  {date2.getDate() + " " + monthNames[date2.getMonth()]} -{" "}
                  {date1.getDate() + " " + monthNames[date1.getMonth()]}
                </StatHelpText>
              </Box>
            </HStack>
          </Box>
        </Stat>
        <Stat
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          minWidth={"300px"}
          overflowWrap={"break-word"}
          backgroundColor={"rgb(255, 255, 255)"}
          borderRadius={"20px"}
          borderColor={"#E2E8F0"}
          borderWidth={"1px"}
          margin={"10px"}
          padding={"15px 20px"}
        >
          <Box>
            <HStack spacing={"24px"}>
              <Box width={"full"}>
                <StatLabel>Patient Count</StatLabel>
                <StatNumber>{patientCount}</StatNumber>
                <StatHelpText>
                  unique patients
                </StatHelpText>
              </Box>
            </HStack>
          </Box>
        </Stat>
        <StatsCard />
        <StatsCard />
      </Flex>
      <Flex
        background={"white"}
        padding={"10px 20px"}
        flexDirection={"column"}
        borderRadius={"20px"}
        borderColor={"#E2E8F0"}
        borderWidth={"2px"}
        boxShadow={"rgb(112 144 176 / 8%) 45px 76px 113px 7px;"}
        margin={"10px"}
      >
        <Heading color={"#2D3748"} fontSize={"xl"} fontWeight={"600"}>
          Patient Table
        </Heading>
        <AppointmentTable state={state} />
      </Flex>
    </Flex>
  );
};

export default DoctorHome;
