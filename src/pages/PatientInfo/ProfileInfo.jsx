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

const ProfileInfo = ({ data }) => {
  const keys = Object.keys(data);

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
          {data.name.description}
        </Heading>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Center height="50px">
            <Badge mx={14}>Age</Badge>
            <Badge mx={14}>{data.age.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={12}>Height</Badge>
            <Badge mx={12}>{data.height.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={12}>Weight</Badge>
            <Badge mx={12}>{data.weight.description}</Badge>
          </Center>
        </Stack>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={2}>
          <Center height="50px">
            <Badge mx={8}>Blood Group</Badge>
            <Badge mx={8}>{data.bloodGroup.description}</Badge>
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
        <Accordion defaultIndex={[0]} allowMultiple>
          {keys.map((item, index) => {
            if (data[item].description&&item!=="name"&&item!=="age"&&item!=="height"&&item!=="weight"&&item!=="bloodGroup") {
              return (
                <AccordionItem key={index} px={2} py={4} border={"none"}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize={"l"}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {data[item].description}
                  </AccordionPanel>
                </AccordionItem>
              );
            } else {
              return null;
            }
          })}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default ProfileInfo;
