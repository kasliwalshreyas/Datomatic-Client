import {
  VStack,
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
  Text,
} from "@chakra-ui/react";
import { Badge } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const AppointmentTable = ({ state }) => {
  const [prescriptions, setPrescriptions] = useState([]);

  const redirectToInfo = (id) => {
    window.location.href = "/doctor/patient/" + id;
  };

  const getPrescriptions = async () => {
    const res = await fetch(`${BACKEND_URL}/doctor/prescriptions`, {
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
      console.log(resData.message || "Fetching prescription failed.");
      return;
    }
    setPrescriptions(resData.prescriptions);
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  return (
    <TableContainer borderRadius={"20px"}>
      <Table backgroundColor={"gray.50"}>
        <Thead backgroundColor={"gray.100"}>
          <Tr>
            <Th
              fontWeight={"bold"}
              fontSize={"lg"}
              backgroundColor={"gray.100"}
            >
              Name
            </Th>
            <Th
              fontWeight={"bold"}
              fontSize={"lg"}
              backgroundColor={"gray.100"}
            >
              Date
            </Th>
            <Th
              fontWeight={"bold"}
              fontSize={"lg"}
              backgroundColor={"gray.100"}
            >
              Time
            </Th>
            <Th
              fontWeight={"bold"}
              fontSize={"lg"}
              backgroundColor={"gray.100"}
            >
              Priority
            </Th>
            <Th
              fontWeight={"bold"}
              fontSize={"lg"}
              backgroundColor={"gray.100"}
            >
              View
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {prescriptions.map((prescription) => {
            return (
              <Tr key={prescription._id}>
                <Td>{prescription.patientName}</Td>
                <Td>{prescription.date}</Td>
                <Td>{prescription.time}</Td>
                <Td>
                  <Badge color="red">{prescription.priority}</Badge>
                </Td>
                <Td>
                  <Button
                    onClick={() => {
                      redirectToInfo(prescription.patientPhoneNumber);
                    }}
                    style={{ backgroundColor: "#805bd4" }}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentTable;
