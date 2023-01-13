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
  Box
} from "@chakra-ui/react";
import { Modal } from 'react-bootstrap';
import { FcLock } from "react-icons/fc";
import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import PrescriptionCard from "../../components/Prescription/PrescriptionCard";
import MedicinalRow from "../../components/Form/MedicinalRow.jsx";

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const Home = ({ state, setState, setAutoLogout }) => {
  const [name, setName] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientGender, setPatientGender] = useState("male");
  const [patientPhNumber, setPatientPhNumber] = useState("");
  const [medicineList, setMedicineList] = useState([]);
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    getName();
    getPrescriptions();
  }, []);

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

  const getPrescriptions = async () => {
    if (state.userType === "patient") {
      console.log("patient");
      const res = await fetch(
        `${BACKEND_URL}/data/patient-prescriptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + state.token,
          },
        }
      );

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
        console.log(resData.message || "Fetching prescription failed.");
        return;
      }

      setPrescriptions(resData.prescriptions);
    } else if (state.userType === "doctor") {
      console.log("doctor");
      const res = await fetch(
        `${BACKEND_URL}/data/doctor-prescriptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + state.token,
          },
        }
      );

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
        console.log(resData.message || "Fetching prescription failed.");
        return;
      }

      console.log(resData.prescriptions);
      setPrescriptions(resData.prescriptions);
    }
  };

  const onClickPrescriptionHandler = async (id) => {

    const res = await fetch(
      `${BACKEND_URL}/data/prescription/` + id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + state.token,
        },
      }
    );

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
      console.log(resData.message || "Fetching prescription failed.");
      return;
    }

    setPatientName(resData.prescription.name);
    setPatientAge(resData.prescription.age);
    setPatientGender(resData.prescription.gender);
    setPatientPhNumber(resData.prescription.phoneNumber);
    setMedicineList(resData.prescription.medications);
    setRemarks(resData.prescription.remarks);
  };




  // const openModal = () => {
  //   onOpen();
  // };

  const [isOpen, setIsOpen] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef(null);
  return (
    <Flex flexWrap={"wrap"}>
      <HStack spacing={8}>
        <Box p={5} shadow='md' borderWidth='1px'>
          <Heading fontSize='xl'>'Plan Money'</Heading>
          <Text mt={4}>'The future can be even brighter but a goal without a plan is just a wish'</Text>
        </Box>
        <Box p={5} shadow='md' borderWidth='1px'>
          <Heading fontSize='xl'>'Save Money'</Heading>
          <Text mt={4}>'You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'</Text>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Home;
