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
import React from "react";
import { useState } from "react";
import MedicinalRow from "../Form/MedicinalRow";

const Prescription = () => {

    const [patientName, setPatientName] = useState("");
    const [patientPhNumber, setPatientPhNumber] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [patientGender, setPatientGender] = useState("");
    const [remarks, setRemarks] = useState("");
    const [medicineList, setMedicineList] = useState([
        {
            'RxNORMcode': '123',
            'medicationName': 'Paracetamol',
            'dosage': '500mg',
            'frequency': '5 days',
            'route': 'Oral',
        },
        {
            'RxNORMcode': '456',
            'medicationName': 'Ibuprofen',
            'dosage': '200mg',
            'frequency': '5 days',
            'route': 'Oral',
        },
        {
            'RxNORMcode': '789',
            'medicationName': 'Doxycycline',
            'dosage': '100mg',
            'frequency': '5 days',
            'route': 'Oral',
        }
    ]);



    return (
        <div
            style={{
                padding: "2%",
                margin: "2%",
                borderRadius: "8px",
                backgroundColor: "white",
            }}
        >
            <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                Prescription
            </Heading>
            <FormControl mt="5%" mr="5%">
                <FormLabel htmlFor="name" fontWeight={"normal"}>
                    Name
                </FormLabel>
                <Input
                    id="name"
                    placeholder="Patient's Name"
                    value={patientName}
                    bgColor="#f5f5f5"
                    readOnly
                />
                {/* </>
      )} */}
            </FormControl>
            <Flex>
                <FormControl mt="5%" mr="5%">
                    <FormLabel htmlFor="phnumber" fontWeight={"normal"}>
                        Phone Number
                    </FormLabel>
                    <Input
                        id="phnumber"
                        placeholder="Phone Number"
                        // value={"9873849229"}
                        value={patientPhNumber}
                        bgColor="#f5f5f5"
                        readOnly
                    />
                </FormControl>
                <FormControl mt="5%" mr="5%">
                    <FormLabel htmlFor="age" fontWeight={"normal"}>
                        Age
                    </FormLabel>
                    <Input
                        id="age"
                        placeholder="Age"
                        // value={19}
                        value={patientAge}
                        bgColor="#f5f5f5"
                        readOnly
                    />
                </FormControl>
                <FormControl mt="5%" mr="5%">
                    <FormLabel htmlFor="gender" fontWeight={"normal"}>
                        Gender
                    </FormLabel>
                    <Input
                        id="gender"
                        placeholder="gender"
                        // value={"Male"}
                        value={patientGender}
                        bgColor="#f5f5f5"
                        readOnly
                    />
                </FormControl>
            </Flex>
            <FormControl mt="5%" mr="5%">
                <FormLabel htmlFor="age" fontWeight={"normal"}>
                    Description/Instruction
                </FormLabel>
                <Textarea
                    id="age"
                    placeholder="Description/Instruction"
                    // value={"Take 2 tablets twice a day"}
                    value={remarks}
                    bgColor="#f5f5f5"
                    readOnly
                />
            </FormControl>

            <TableContainer>
                <Table mt="5%" size="sm" h="full" bg="">
                    <Thead>
                        <Tr bgColor="white">
                            <Th fontWeight="bold" minWidth="10%" maxWidth="10%" bgColor="white">
                                RxNORM code
                            </Th>
                            <Th fontWeight="bold" minWidth="40%" maxWidth="40%" bgColor="white">
                                Medication Name
                            </Th>
                            <Th fontWeight="bold" minWidth="10%" maxWidth="10%" bgColor="white">
                                Dosage (in mg)
                            </Th>
                            <Th fontWeight="bold" minWidth="15%" maxWidth="15%" bgColor="white">
                                Route
                            </Th>
                            <Th fontWeight="bold" minWidth="15%" maxWidth="15%" bgColor="white">
                                Frequency
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {medicineList &&
                            medicineList.map((medicine, index) => (
                                <MedicinalRow medicineInfo={medicine} key={index} readOnly={true} />
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Prescription;