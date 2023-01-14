import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useInterval } from '@mantine/hooks';
import { createStyles, Navbar, Group, Code, Title, Box, Avatar, Flex, Table, ScrollArea, Button, Progress, Modal } from '@mantine/core';
import {
    IconUser,
    IconPrescription,
    IconReportMedical
} from '@tabler/icons';
import { Dropzone } from '@mantine/dropzone';
import Prescription from '../../components/Prescription/Prescription';
import { ReportTable } from '../../components/Reports/ReportTable';
import PrescriptionAccordion from './PrescriptionAccordion';
import { useParams } from 'react-router-dom';
import ProfileInformation from './ProfileInformation';

const BACKEND_URL = import.meta.env.VITE_SERVER_URL;


const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');

    return {
        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${icon}`]: {
                    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: "#b29ce5",
                color: 'black',
                [`& .${icon}`]: {
                    color: 'black'
                },
            },
        },

        rightView: {
            display: 'flex',
        },

        addbuttoncontainer: {
            display: 'flex !important',
            flexDirection: 'column !important',
            justifyContent: 'end !important',
        },

        outercontainer: {
            padding: '20px',
            justifyContent: 'space-between',
        },
        innercontainer1: {
            height: '75vh',
            width: '28vw',
            backgroundColor: "white",
            marginRight: '30px',
            borderRadius: "5px",
            flexDirection: 'column',
            padding: '10px',
            boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",

        },
        profiledetailscontainer: {
            marginTop: "20px",
            borderTop: "1px solid gray",
            padding: '15px',
            paddingTop: "30px",
            height: '80%',
        },
        profileimage: {

            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            backgroundColor: "black",
            margin: '10px',
        },
        profileName: {
            width: '50%',
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        },
        BoldText: {
            fontWeight: '700',
        },

        LightText: {
            color: 'gray',
            fontWeight: '400',
        },
        detailsnamecontainer: {
            width: '45%',
            marginRight: "5%",
            flexDirection: "column",
        },
        detailsvaluecontainer: {
            width: '45%',
            marginRight: "5%",
            flexDirection: "column",
        },
        detailnamebox: {
            margin: '3px',
            height: "15%",
            justifyContent: 'space-around',
        },
        innercontainer2: {
            height: '75vh',
            width: '44vw',
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "10px",
            flexDirection: "column",
            boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
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
            position: 'relative',
            transition: 'background-color 150ms ease',
        },

        progress: {
            position: 'absolute',
            bottom: -1,
            right: -1,
            left: -1,
            top: -1,
            height: 'auto',
            backgroundColor: 'transparent',
            zIndex: 0,
        },

        label: {
            position: 'relative',
            zIndex: 1,
        },




    };
});

const data = [
    { link: '', label: 'Profile', icon: IconUser },
    { link: '', label: 'Prescriptions', icon: IconPrescription },
    { link: '', label: 'Reports', icon: IconReportMedical }
];


const PatientInfo = ({ state, logoutHandler }) => {
    const { phoneNumber } = useParams();
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Profile');
    const fileInputRef = useRef(null);


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
            className={cx(classes.link, { [classes.linkActive]: item.label === active })}
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
            value: "Shreyas Kasliwal"
        },
        {
            name: "Age",
            value: "21"
        },
    ];

    const onUploadFileHandler = async (file) => {
        try {
            console.log(file);

            if (!file) {
                console.log("No file selected");
                return;
            }

            const formData = new FormData();

            formData.append('file', file);

            const res = await fetch(`${BACKEND_URL}/doctor/upload-report`, {
                method: 'PUT',
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
        }
        catch (err) {
            console.log(err);
        }
    }




    const profileData = {
        "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
        "name": "Jane Fingerlicker",
        "email": "jfingerlicker@me.io",
        "job": "Art director",
        "age": "25",
        "gender": "M",
        "height": "1.75m",
        "weight": "75kg",
        "bloodGroup": "O+",
        "address": "1234 Main Street, New York, NY 10001",
        "phone": "123-456-7890",
        "emergencyContact": "Jane's Mom",
        "emergencyContactPhone": "123-456-7890",
        "insurance": "Blue Cross Blue Shield",
        "insuranceNumber": "123456789",
        "allergies": "Peanuts, Shellfish",
        "medications": "Lisinopril, Metformin",
        "conditions": "Diabetes, Hypertension",
        "notes": "Jane is a very active person and loves to run and hike. She is also a vegetarian and does not eat meat or fish.",
        "reports": [
            {
                "name": "X-Ray",
                "date": "2020-01-01",
                "file": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            },
            {
                "name": "MRI",
                "date": "2020-01-01",

                "file": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlf"
            },
        ]
    };

    return (
        <>
            <Flex>
                <Navbar sx={{ height: '91vh' }} width={{ sm: 300 }} p="md">
                    <Navbar.Section grow>
                        <Group className={classes.header} position="apart">
                            <Title order={1}>Shreyas Kasliwal</Title>
                        </Group>
                        {links}
                    </Navbar.Section>
                    <Navbar.Section grow className={classes.addbuttoncontainer}>
                        <Flex >
                            <Group position="center" >
                                <Button onClick={(event) => {
                                    event.preventDefault();
                                    fileInputRef.current.click();
                                }}
                                    sx={{ backgroundColor: '#805bd4', color: 'white' }}>Upload Reports</Button>
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

                <Box sx={
                    {
                        height: '88vh',
                        width: '100%',
                        backgroundColor: "#F7FAFC",
                    }
                } >
                    {active === 'Profile' && <ProfileInformation data={profileData} state={state} phoneNumber={phoneNumber} />}
                    {active === 'Prescriptions' && <PrescriptionAccordion state={state} phoneNumber={phoneNumber} />}
                    {active === 'Reports' && <ReportTable data={mockData} />}
                </Box>

            </Flex>
        </>
    );
}



export default PatientInfo;

{/* <Flex className={classes.outercontainer}>
<Flex className={classes.innercontainer1}>
    <Flex className={classes.profilephotocontainer}>

        <Avatar size={120} radius={120} mx="auto" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" alt="it's me" />


        <Flex className={classes.profileName}>
            <Title order={4} className={classes.BoldText}>Shreyas Kasliwal</Title>
            <Title order={6} className={classes.LightText}>Male | 26 </Title>

        </Flex>
    </Flex>
    <Flex className={classes.profiledetailscontainer}>
   
        <Flex className={classes.detailsnamecontainer}>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.BoldText}>Date of Birth</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.BoldText}>Mobile No.</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.BoldText}>Email Id</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.BoldText}>Height</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.BoldText}>Address</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.BoldText}>Nationality</Title>
            </Box>
   
        </Flex>
        <Flex className={classes.detailsvaluecontainer}>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.LightText}>20/10/2004</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.LightText}>9637582165</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.LightText}>Vital@gmail.com</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.LightText}>162cm</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.LightText}>Bombay Bandra House, mumbai</Title>
            </Box>
            <Box className={classes.detailnamebox}>
                <Title order={6} className={classes.LightText}>Indian</Title>
            </Box>
   
        </Flex>
    </Flex>
</Flex>
<Flex className={classes.innercontainer2}>
    <Title order={2} className={classes.medicationhistorytext}> Medication History</Title>
    <Flex className={classes.medicationhistorycontainer}>
        <Box className={classes.mhtextdetailsname}>
            <Title order={4} className={classes.BoldText}>Diabetes</Title>
        </Box>
        <Box className={classes.mhtextdetailsvalue}>
            <Title order={5} className={classes.LightText}>yes i am diabetic</Title>
        </Box>
        <Box className={classes.mhtextdetailsname}>
            <Title order={4} className={classes.BoldText}>Asthma</Title>
        </Box>
        <Box className={classes.mhtextdetailsvalue}>
            <Title order={5} className={classes.LightText}>No</Title>
        </Box>
        <Box className={classes.mhtextdetailsname}>
            <Title order={4} className={classes.BoldText}>Heart Problems</Title>
        </Box>
        <Box className={classes.mhtextdetailsvalue}>
            <Title order={5} className={classes.LightText}>No</Title>
        </Box>
        <Box className={classes.mhtextdetailsname}>
            <Title order={4} className={classes.BoldText}>Migraine</Title>
        </Box>
        <Box className={classes.mhtextdetailsvalue}>
            <Title order={5} className={classes.LightText}>yes</Title>
        </Box>
        <Box className={classes.mhtextdetailsname}>
            <Title order={4} className={classes.BoldText}>Smoking</Title>
        </Box>
        <Box className={classes.mhtextdetailsvalue}>
            <Title order={5} className={classes.LightText}>Chain Smoker</Title>
        </Box>
        <Box className={classes.mhtextdetailsname}>
            <Title order={4} className={classes.BoldText}>Drinking</Title>
        </Box>
        <Box className={classes.mhtextdetailsvalue}>
            <Title order={5} className={classes.LightText}>Occasionally</Title>
        </Box>
    </Flex>
</Flex>
</Flex> */}