import React from 'react';
import { useState, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';
import { createStyles, Navbar, Group, Code, Title, Box, Flex, Table, ScrollArea, Button, Progress } from '@mantine/core';
import {
    IconUser,
    IconPrescription,
    IconReportMedical
} from '@tabler/icons';
import Prescription from '../../components/Prescription/Prescription';
import { ReportTable } from '../../components/Reports/ReportTable';
import PrescriptionAccordion from './PrescriptionAccordion';
import { useParams } from 'react-router-dom';


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
                // backgroundColor: "#ccbded",
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
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            flexDirection: 'column',
            padding: '10px',
            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            box-shadow: ;
        },

        profilephotocontainer: {
            // padding:'10px',


        },
        profiledetailscontainer: {
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            marginTop:"20px",
            borderTop:"1px solid gray",
            padding: '15px',
            paddingTop:"30px",
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
            // borderRadius: "20px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
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
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            marginRight: "5%",
            flexDirection: "column",
        },
        detailsvaluecontainer: {
            width: '45%',
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            marginRight: "5%",
            flexDirection: "column",
        },
        detailnamebox: {
            // borderRadius: "1px",
            // borderColor: "#E2E8F0",
            // borderWidth: "1px",
            margin: '3px',
            height: "15%",
            justifyContent: 'space-around',
        },
        innercontainer2: {
            height: '75vh',
            width: '44vw',
            backgroundColor: "white",
            borderRadius: "5px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            padding: "10px",
            flexDirection: "column",
            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        },
        medicationhistorytext: {
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",

            padding: "5px",
            margin: "10px",
            width: "96%",

        },
        medicationhistorycontainer: {
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            borderTop:"1px solid gray",
            padding: "10px",
            margin: "10px",
            paddingTop:"30px",
            width: "96%",
            height: "80%",
            flexDirection: "column",
            justifyContent: "space-around",
        },
        mhtextdetailsname: {
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px", 
            height: "10%",

        },
        mhtextdetailsvalue: {
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
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

    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);
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
    ];


    return (
        <>
            <Flex>
                <Navbar sx={{ height: '88vh' }} width={{ sm: 300 }} p="md">
                    <Navbar.Section grow>
                        <Group className={classes.header} position="apart">
                            <Title order={1}>Shreyas Kasliwal</Title>
                        </Group>
                        {links}
                    </Navbar.Section>
                    <Navbar.Section grow className={classes.addbuttoncontainer}>
                        <Flex >
                            <Button
                                fullWidth
                                className={classes.button}
                                onClick={() => (loaded ? setLoaded(false) : !interval.active && interval.start())}
                                color={loaded ? 'teal' : cx.primaryColor}
                            >
                                <div className={classes.label}>
                                    {progress !== 0 ? 'Uploading files' : loaded ? 'Files uploaded' : 'Upload files'}
                                </div>
                                {progress !== 0 && (
                                    <Progress
                                        value={progress}
                                        className={classes.progress}
                                        color={cx.fn.rgba(theme.colors[cx.primaryColor][2], 0.35)}
                                        radius="sm"
                                    />
                                )}
                            </Button>
                        </Flex>

                    </Navbar.Section>

                </Navbar>

                <Box height={'100%'} width={'100%'} >
                    {active === 'Profile' &&
                        <div>
                            <Flex className={classes.outercontainer}>
                                <Flex className={classes.innercontainer1}>
                                    <Flex className={classes.profilephotocontainer}>
                                        <Box className={classes.profileimage}></Box>
                                        <Flex className={classes.profileName}>
                                            <Title order={4} className={classes.BoldText}>Shreyas Kasliwal</Title>
                                            <Title order={6} className={classes.LightText}>Male | 26 </Title>

                                        </Flex>
                                    </Flex>
                                    <Flex className={classes.profiledetailscontainer}>
                                        {/* <Title order={4} className={classes.BoldText}>Personal Info</Title> */}
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
                                            {/* <Box className={classes.detailnamebox}>
                                        <Title order={6} className={classes.BoldText}>Doctor</Title> 
                                        </Box> */}
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
                                            {/* <Box className={classes.detailnamebox}>
                                        <Title order={6} className={classes.LightText}>Dr.Shobhit Gupta</Title> 
                                        </Box> */}
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
                            </Flex>
                        </div>}
                    {active === 'Prescriptions' && <PrescriptionAccordion state={state} phoneNumber={phoneNumber} />}
                    {active === 'Reports' && <ReportTable data={mockData} />}
                </Box>

            </Flex>
        </>
    );
}



export default PatientInfo;