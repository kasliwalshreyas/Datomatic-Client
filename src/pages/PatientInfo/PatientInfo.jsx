import React from 'react';
import { useState, useEffect } from 'react';
import { createStyles, Navbar, Group, Code, Title, Box, Flex , Table, ScrollArea } from '@mantine/core';
import {
    IconUser,
    IconPrescription,
    IconReportMedical
} from '@tabler/icons';
import Prescription from '../../components/Prescription/Prescription';
import { ReportTable } from '../../components/Reports/ReportTable';
import PrescriptionAccordion from './PrescriptionAccordion';
// import { MantineLogo } from '@mantine/ds';


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
        
        outercontainer: {
            padding:'20px',
            justifyContent:'space-between',
        },
        innercontainer1: {
            height:'75vh',
            width:'30vw',
            backgroundColor:"white",
            marginRight:'10px',
            borderRadius: "20px",
            borderColor: "#E2E8F0",
            borderWidth: "2px",
            flexDirection: 'column',
            padding:'10px',
        },
        
        profilephotocontainer:{
            // padding:'10px',
            

        },
        profiledetailscontainer:{
            borderRadius: "10px",
            borderColor: "#E2E8F0",
            borderWidth: "2px",
            padding:'15px',
            height:'80%',
        },
        profileimage:{
            
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            backgroundColor:"black",
            margin:'10px',
        },
        profileName:{
            width:'50%',
            // borderRadius: "20px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
        },
        BoldText:{
            fontWeight:'700',
        },

        LightText:{
            color:'gray',
            fontWeight:'400',
        },
        detailsnamecontainer:{
            width:'45%',
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            marginRight:"5%",
            flexDirection:"column",
        },
        detailsvaluecontainer:{
            width:'45%',
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            marginRight:"5%",
            flexDirection:"column",
        },
        detailnamebox:{
            // borderRadius: "1px",
            // borderColor: "#E2E8F0",
            // borderWidth: "1px",
            margin:'3px',
            height:"15%",
            justifyContent:'space-around',
        },
        innercontainer2: {
            height:'75vh',
            width:'44vw',
            backgroundColor:"white",
            borderRadius: "20px",
            borderColor: "#E2E8F0",
            borderWidth: "2px",
            padding:"10px", 
            flexDirection:"column",
        },
        medicationhistorytext:{
            borderRadius: "10px",
            borderColor: "#E2E8F0",
            borderWidth: "2px",
            padding:"10px",
            margin:"10px",
            width:"96%",
            
        },
        medicationhistorycontainer:{
            borderRadius: "10px",
            borderColor: "#E2E8F0",
            borderWidth: "2px",
            padding:"10px",
            margin:"10px",   
            width:"96%",
            height:"80%",
            flexDirection:"column",
            justifyContent:"space-around",
        },
        mhtextdetailsname:{
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px", 
            height:"10%",
            
        },
        mhtextdetailsvalue:{
            // borderRadius: "10px",
            // borderColor: "#E2E8F0",
            // borderWidth: "2px",
            height:"10%",
        },


        

    };
});

const data = [
    { link: '', label: 'Profile', icon: IconUser },
    { link: '', label: 'Prescriptions', icon: IconPrescription },
    { link: '', label: 'Reports', icon: IconReportMedical }
];


const PatientInfo = () => {

    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Profile');

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
            "name": "Athena Weissnat",
            "company": "Little - Rippin",
            "email": "Elouise.Prohaska@yahoo.com"
        },
        {
            "name": "Deangelo Runolfsson",
            "company": "Greenfelder - Krajcik",
            "email": "Kadin_Trantow87@yahoo.com"
        },
        {
            "name": "Danny Carter",
            "company": "Kohler and Sons",
            "email": "Marina3@hotmail.com"
        },
        {
            "name": "Trace Tremblay PhD",
            "company": "Crona, Aufderhar and Senger",
            "email": "Antonina.Pouros@yahoo.com"
        },
        {
            "name": "Derek Dibbert",
            "company": "Gottlieb LLC",
            "email": "Abagail29@hotmail.com"
        },
        {
            "name": "Viola Bernhard",
            "company": "Funk, Rohan and Kreiger",
            "email": "Jamie23@hotmail.com"
        },
        {
            "name": "Austin Jacobi",
            "company": "Botsford - Corwin",
            "email": "Genesis42@yahoo.com"
        },
        {
            "name": "Hershel Mosciski",
            "company": "Okuneva, Farrell and Kilback",
            "email": "Idella.Stehr28@yahoo.com"
        },
        {
            "name": "Mylene Ebert",
            "company": "Kirlin and Sons",
            "email": "Hildegard17@hotmail.com"
        },
        {
            "name": "Lou Trantow",
            "company": "Parisian - Lemke",
            "email": "Hillard.Barrows1@hotmail.com"
        },
        {
            "name": "Dariana Weimann",
            "company": "Schowalter - Donnelly",
            "email": "Colleen80@gmail.com"
        },
        {
            "name": "Dr. Christy Herman",
            "company": "VonRueden - Labadie",
            "email": "Lilyan98@gmail.com"
        },
        {
            "name": "Katelin Schuster",
            "company": "Jacobson - Smitham",
            "email": "Erich_Brekke76@gmail.com"
        },
        {
            "name": "Melyna Macejkovic",
            "company": "Schuster LLC",
            "email": "Kylee4@yahoo.com"
        },
        {
            "name": "Pinkie Rice",
            "company": "Wolf, Trantow and Zulauf",
            "email": "Fiona.Kutch@hotmail.com"
        },
        {
            "name": "Brain Kreiger",
            "company": "Lueilwitz Group",
            "email": "Rico98@hotmail.com"
        }
    ];


    

    return (

        <Flex>
            <Navbar height={'100%'} width={{ sm: 300 }} p="md">
                <Navbar.Section grow>
                    <Group className={classes.header} position="apart">
                        <Title order={1}>Shreyas Kasliwal</Title>
                        {/* <MantineLogo size={28} /> */}
                        {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
                    </Group>
                    {links}
                </Navbar.Section>
            </Navbar>

            <Box height={'100%'} width={'100%'} >
                {active === 'Profile' &&
                    <div>
                        <Flex className={classes.outercontainer}>
                            <Flex className={classes.innercontainer1}>
                                <Flex className={classes.profilephotocontainer}>
                                    <Box className={classes.profileimage}></Box>
                                    <Flex className={ classes.profileName}>
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
                {active === 'Prescriptions' && <PrescriptionAccordion />}
                {active === 'Reports' && <ReportTable data={mockData} />}
            </Box>
        </Flex>
    );
}



export default PatientInfo;