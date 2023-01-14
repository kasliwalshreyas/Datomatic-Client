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
    Text
} from "@chakra-ui/react";
import { Badge } from "@mantine/core";
import React from "react";
import { Button } from "react-bootstrap";
const AppointmentTable = () => {


    const redirectToInfo = (id) => {
        window.location.href = "/doctor/patient/" + id;
    }

    return (
        <TableContainer
            borderRadius={"20px"}
        >
            <Table
                backgroundColor={"gray.50"}
            >
                <Thead
                    backgroundColor={"gray.100"}
                >
                    <Tr
                    >
                        <Th fontWeight={"bold"} fontSize={'lg'} backgroundColor={"gray.100"}>Name</Th>
                        <Th fontWeight={"bold"} fontSize={'lg'} backgroundColor={"gray.100"}>Date</Th>
                        <Th fontWeight={"bold"} fontSize={'lg'} backgroundColor={"gray.100"}>Time</Th>
                        <Th fontWeight={"bold"} fontSize={'lg'} backgroundColor={"gray.100"}>Priority</Th>
                        <Th fontWeight={"bold"} fontSize={'lg'} backgroundColor={"gray.100"}>View</Th>
                    </Tr>
                </Thead>
                <Tbody
                >
                    <Tr
                    >
                        <Td>Shreyas Kasliwal</Td>
                        <Td>13/01/2023</Td>
                        <Td><span />10:00<span /> AM</Td>
                        <Td>
                            <Badge color="red">High</Badge>
                        </Td>
                        <Td><Button onClick={() => { redirectToInfo(1) }} style={{ backgroundColor: '#805bd4' }}>View</Button></Td>
                    </Tr>
                    <Tr
                    // backgroundColor={"rgb(255, 255, 255)"}
                    // borderRadius={"20px"}
                    // borderColor={"#E2E8F0"}
                    // borderWidth={"1px"}
                    >
                        <Td>Shreyas Kasliwal</Td>
                        <Td>13/01/2023</Td>
                        <Td><span />10:00<span /> AM</Td>
                        <Td>
                            <Badge color="yellow">Badge</Badge>
                        </Td>
                        <Td><Button onClick={() => { redirectToInfo(2) }} style={{ backgroundColor: '#805bd4' }}>View</Button></Td>
                    </Tr>
                    <Tr
                    // backgroundColor={"rgb(255, 255, 255)"}
                    // borderRadius={"20px"}
                    // borderColor={"#E2E8F0"}
                    // borderWidth={"1px"}
                    >
                        <Td>Shreyas Kasliwal</Td>
                        <Td>12/01/2023</Td>
                        <Td><span />10:00<span /> AM</Td>
                        <Td>
                            <Badge color="cyan">Low</Badge>
                        </Td>
                        <Td><Button onClick={() => { redirectToInfo(3) }} style={{ backgroundColor: '#805bd4' }}>View</Button></Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer >
    );
}

export default AppointmentTable;