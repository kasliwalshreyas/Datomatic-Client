import React from 'react';
import { useState, useEffect } from 'react';
import { createStyles, Navbar, Group, Code, Title, Box, Flex } from '@mantine/core';
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
                {active === 'Profile' && <div>Profile</div>}
                {active === 'Prescriptions' && <PrescriptionAccordion />}
                {active === 'Reports' && <ReportTable data={mockData} />}
            </Box>
        </Flex>
    );
}



export default PatientInfo;