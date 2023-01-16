import React from "react";
import { useState, useEffect, useRef } from "react";
import { useInterval } from "@mantine/hooks";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  Title,
  Box,
  Avatar,
  Flex,
  Table,
  ScrollArea,
  Button,
  Progress,
  Modal,
} from "@mantine/core";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { IconUser, IconPrescription, IconReportMedical } from "@tabler/icons";
import { Dropzone } from "@mantine/dropzone";
import Prescription from "../../components/Prescription/Prescription";
import { ReportTable } from "../../components/Reports/ReportTable";
import PrescriptionAccordion from "./PrescriptionAccordion";
import { useParams } from "react-router-dom";
import ProfileInformation from "./ProfileInformation";
import ProfileInfo from "./ProfileInfo";

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");

  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: "#b29ce5",
        color: "black",
        [`& .${icon}`]: {
          color: "black",
        },
      },
    },

    rightView: {
      display: "flex",
    },

    addbuttoncontainer: {
      display: "flex !important",
      flexDirection: "column !important",
      justifyContent: "end !important",
    },

    outercontainer: {
      padding: "20px",
      justifyContent: "space-between",
    },
    innercontainer1: {
      height: "75vh",
      width: "28vw",
      backgroundColor: "white",
      marginRight: "30px",
      borderRadius: "5px",
      flexDirection: "column",
      padding: "10px",
      boxShadow:
        "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    },
    profiledetailscontainer: {
      marginTop: "20px",
      borderTop: "1px solid gray",
      padding: "15px",
      paddingTop: "30px",
      height: "80%",
    },
    profileimage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      backgroundColor: "black",
      margin: "10px",
    },
    profileName: {
      width: "50%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    BoldText: {
      fontWeight: "700",
    },

    LightText: {
      color: "gray",
      fontWeight: "400",
    },
    detailsnamecontainer: {
      width: "45%",
      marginRight: "5%",
      flexDirection: "column",
    },
    detailsvaluecontainer: {
      width: "45%",
      marginRight: "5%",
      flexDirection: "column",
    },
    detailnamebox: {
      margin: "3px",
      height: "15%",
      justifyContent: "space-around",
    },
    innercontainer2: {
      height: "75vh",
      width: "44vw",
      backgroundColor: "white",
      borderRadius: "5px",
      padding: "10px",
      flexDirection: "column",
      boxShadow:
        "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    },
    medicationhistorytext: {
      padding: "5px",
      margin: "10px",
      width: "96%",
    },
    medicationhistorycontainer: {
      borderTop: "1px solid gray",
      padding: "10px",
      margin: "10px",
      paddingTop: "30px",
      width: "96%",
      height: "80%",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    mhtextdetailsname: {
      height: "10%",
    },
    mhtextdetailsvalue: {
      height: "10%",
    },
    button: {
      position: "relative",
      transition: "background-color 150ms ease",
    },

    progress: {
      position: "absolute",
      bottom: -1,
      right: -1,
      left: -1,
      top: -1,
      height: "auto",
      backgroundColor: "transparent",
      zIndex: 0,
    },

    label: {
      position: "relative",
      zIndex: 1,
    },
  };
});

const data = [
  { link: "", label: "Profile", icon: IconUser },
  { link: "", label: "Prescriptions", icon: IconPrescription },
  { link: "", label: "Reports", icon: IconReportMedical },
];

const PatientInfo = ({ state, logoutHandler }) => {
  const { phoneNumber } = useParams();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Profile");
  const [patientInfo, setPatientInfo] = useState(null);
  const [reports, setReports] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    getPatientInfo();
    getReports();
  }, []);

  const getPatientInfo = async () => {
    const res = await fetch(`${BACKEND_URL}/doctor/patient/${phoneNumber}`, {
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

    setPatientInfo(resData.patientInfo);
    console.log(resData.patientInfo);
  };

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );
  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const mockData = [
    {
      name: "Name",
      value: "Shreyas Kasliwal",
    },
    {
      name: "Age",
      value: "21",
    },
  ];

  const onUploadFileHandler = async (file) => {
    try {
      if (!file) {
        console.log("No file selected");
        return;
      }

      const formData = new FormData();

      formData.append("phoneNumber", phoneNumber);
      formData.append("file", file);

      const res = await fetch(`${BACKEND_URL}/doctor/upload-report`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + state.token,
        },
        body: formData,
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

      if (resData) {
        getReports();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getReports = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/doctor/get-reports/${phoneNumber}`,
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
        console.log(resData.message || "Fetching name failed.");
        return;
      }

      setReports(resData.reports);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex position={"absolute"}>
        <Navbar sx={{ height: "91vh" }} width={{ sm: 300 }} p="md">
          <Navbar.Section grow>
            {/* <Group className={classes.header} position="apart">
                            <Title order={1}>Shreyas Kasliwal</Title>
                        </Group> */}
            {links}
          </Navbar.Section>
          <Navbar.Section grow className={classes.addbuttoncontainer}>
            <Flex>
              <Group position="center">
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                  sx={{ backgroundColor: "#805bd4", color: "white" }}
                >
                  Upload Reports
                </Button>
                <input
                  type="file"
                  id="file"
                  accept="application/pdf"
                  ref={fileInputRef}
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                      onUploadFileHandler(file);
                    }
                  }}
                  hidden
                />
              </Group>
            </Flex>
          </Navbar.Section>
        </Navbar>

        {active === "Profile" &&
          (patientInfo === null ? (
            <Flex
              sx={{
                backgroundColor: "#F7FAFC",
                justifyContent: "center",
                alignItems: "center",
              }}
              h={"80vh"}
              w={"80%"}
              justifyContent="center"
              alignItems="center"
            >
              <Alert
                status="error"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                width="400px"
                borderRadius="md"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Profile Not Found
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  The respective patient has not yet created a profile.
                </AlertDescription>
              </Alert>
            </Flex>
          ) : (
            <Box
              sx={{
                height: "88vh",
                width: "100%",
                backgroundColor: "#F7FAFC",
              }}
            >
              <ProfileInfo data={patientInfo} />
            </Box>
          ))}
        {active === "Prescriptions" && (
          <Box
            sx={{
              height: "88vh",
              width: "100%",
              backgroundColor: "#F7FAFC",
            }}
          >
            <PrescriptionAccordion state={state} phoneNumber={phoneNumber} />
          </Box>
        )}
        {active === "Reports" && (
          <Box
            sx={{
              height: "88vh",
              width: "100%",
              backgroundColor: "#F7FAFC",
            }}
          >
            <ReportTable data={reports} />
          </Box>
        )}
      </Flex>
    </>
  );
};

export default PatientInfo;
