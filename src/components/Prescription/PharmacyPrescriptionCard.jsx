import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const PharmacyPrescriptionCard = ({
  patientName,
  doctorName,
  date,
  hospitalName,
  remarks,
  onOpen,
  id,
  onClickPrescriptionHandler,
}) => {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"lg"}
        m="4"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        onClick={() => {
          onClickPrescriptionHandler(id).then(() => onOpen());
        }}
        cursor={"pointer"}
      >
        <Stack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {patientName}
          </Heading>
          <Text color={"gray.500"}>{remarks.substring(0, 100) + "..."}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text color={"purple.400"} fontWeight={600}>Dr. {doctorName} · {hospitalName}</Text>
            <Text fontWeight={400} color={"gray.500"}>
              {date}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default PharmacyPrescriptionCard;
