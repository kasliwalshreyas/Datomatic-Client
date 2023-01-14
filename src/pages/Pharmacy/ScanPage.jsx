import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const ScanPage = ({ state, setState, setAutoLogout }) => {
  const [pharmacyName, setPharmacyName] = useState("");

  const getPharmacyName = async () => {
    const res = await fetch(`${BACKEND_URL}/pharmacy/pharmacy-name`, {
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

    setPharmacyName(resData.pharmacyName);
  };

  useEffect(() => {
    getPharmacyName();
  }, []);

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w="25em"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <QRCode
          size={256}
          style={{
            height: "auto",
            width: "60%",
            marginTop: "40%",
            marginBottom: "50%",
            marginLeft: "30%",
            marginRight: "30%",
          }}
          value={state.userId}
          viewBox={`0 0 256 256`}
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              istruncated="true"
            >
              {pharmacyName}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ScanPage;
