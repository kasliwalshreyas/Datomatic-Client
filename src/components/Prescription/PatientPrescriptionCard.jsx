import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const PatientPrescriptionCard = ({
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
          <Text
            color={"purple.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {hospitalName}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            Dr. {doctorName}
          </Heading>
          <Text color={"gray.500"}>{remarks.substring(0, 100) + "..."}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={"600"} color={"gray.500"}>
              {date}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default PatientPrescriptionCard;
