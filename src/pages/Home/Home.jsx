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
  StatHelpText
} from "@chakra-ui/react";
import { Modal } from 'react-bootstrap';
import { FcLock } from "react-icons/fc";
import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import PrescriptionCard from "../../components/Prescription/PrescriptionCard";
import MedicinalRow from "../../components/Form/MedicinalRow.jsx";
import StatsCard from "../../components/Dashboard/StatsCard";
import AppointmentTable from "../../components/Dashboard/AppointmentTable";


const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const Home = ({ state, setState, setAutoLogout }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    getName();
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
    <Flex flexWrap={"wrap"} padding={"10px"} flexDirection={'column'}>
      <Flex>
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </Flex>
      <Flex
        background={'white'}
        padding={'10px 20px'}
        flexDirection={'column'}
        borderRadius={"20px"}
        borderColor={"#E2E8F0"}
        borderWidth={"2px"}
        boxShadow={"rgb(112 144 176 / 8%) 45px 76px 113px 7px;"}
        margin={"10px"}
      >
        <Heading
          color={"#2D3748"}
          fontSize={"xl"}
          fontWeight={"600"}
        >Patient Table</Heading>
        <AppointmentTable />
      </Flex>



    </Flex >
  );
};

export default Home;
