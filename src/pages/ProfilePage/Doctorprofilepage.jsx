import { Flex, Card, createStyles, Avatar, Box, Title, Button, Group, Paper, Text } from '@mantine/core';
import { IconDroplet, IconRuler3, IconWeight } from '@tabler/icons';
import { useState } from 'react';
import ProfileStatsCard from './ProfileStatsCard';
import Extraprofiledetails from './Extraprofiledetails';


const data = [
    { icon: IconDroplet, label: 'Blood Group' },
    { icon: IconRuler3, label: 'Height' },
    { icon: IconWeight, label: 'Weight' },
    { icon: IconWeight, label: 'Age' },
];

const useStyles = createStyles((theme) => ({
    // card: {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    //   padding: theme.spacing.md,
    //   display: 'flex',
    //   // minHeight: '200px',
    //   // minWidth: '200px',
    //   // backgroundColor: 'red'

    // },
    // borderFlex: {
    //   background: 'white',
    //   padding: '10px 20px 20px 20px',
    //   borderRadius: "5px",
    //   // borderColor: "#E2E8F0",
    //   // borderWidth: "2px",
    //   boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",

    //   margin: "10px"
    // },
    // borderFlex1: {
    //   // border: '1px solid #e0e0e0',
    //   borderRadius: '5px',
    //   padding: '10px',
    //   margin: '10px',
    //   width: '50%',
    //   height: '100%',
    //   // backgroundColor: 'lightblue',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    //   alignItems: 'center',



    // },
    // borderFlex2: {
    //   // border: '1px solid #e0e0e0',
    //   // borderRadius: '5px',
    //   borderLeft: '1px solid gray',
    //   padding: '10px',
    //   margin: '10px',
    //   width: '50%',
    //   height: '100%',
    //   // backgroundColor: 'lightblue',
    //   flexDirection: 'row',
    //   justifyContent: 'space-around',



    // },
    // title: {
    //   fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   fontWeight: 700,
    // },
    // infocontainer: {


    //   flexDirection: 'column',
    //   justifyContent: 'space-around',
    //   width: '50%',
    //   // alignItems: 'center',

    // },
    // infocontentbox: {
    //   // textAlign: 'center',
    //   padding: '10px',



    // },
    // infolongtext: {
    //   textTransform: 'uppercase',
    //   fontWeight: 700,
    //   fontSize: theme.fontSizes.md,
    //   fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.colors.gray[6],
    //   lineHeight: 1.2,

    // },
    // infoshorttext: {
    //   fontSize: theme.fontSizes.sm,
    //   fontWeight: 700,
    //   color: theme.black,
    //   // marginTop: '7px',
    // },
    // item: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   textAlign: 'center',
    //   borderRadius: theme.radius.md,
    //   height: 90,
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    //   transition: 'box-shadow 150ms ease, transform 100ms ease',

    //   '&:hover': {
    //     boxShadow: `${theme.shadows.md} !important`,
    //     transform: 'scale(1.05)',
    //   },
    // },
    // editButton: {
    //   backgroundColor: '#805bd4',
    //   color: 'white',
    //   transition: 'box-shadow 150ms ease, transform 100ms ease',
    //   marginTop: '10px',

    //   '&:hover': {
    //     backgroundColor: '#7351be',
    //     color: 'white',
    //   },
    // },
    // root: {
    //   backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
    //     } 100%)`,
    //   padding: theme.spacing.xl,
    //   borderRadius: theme.radius.md,
    //   display: 'flex',

    //   [theme.fn.smallerThan('xs')]: {
    //     flexDirection: 'column',
    //   },
    // },
    // icon: {
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   marginTop: theme.spacing.lg,
    //   color: theme.colors[theme.primaryColor][6],
    // },
    // stat: {
    //   minWidth: 98,
    //   paddingTop: theme.spacing.xl,
    //   minHeight: 140,
    //   display: 'flex',
    //   flex: 1,
    //   flexDirection: 'column',
    //   justifyContent: 'space-between',
    //   backgroundColor: theme.white,
    // },
    // label: {
    //   textTransform: 'uppercase',
    //   fontWeight: 700,
    //   fontSize: theme.fontSizes.xs,
    //   fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //   color: theme.colors.gray[6],
    //   lineHeight: 1.2,
    // },
    // value: {
    //   fontSize: theme.fontSizes.sm,
    //   fontWeight: 700,
    //   color: theme.black,
    // },
    // count: {
    //   color: theme.colors.gray[6],
    // },
    // day: {
    //   fontSize: 44,
    //   fontWeight: 700,
    //   color: theme.white,
    //   lineHeight: 1,
    //   textAlign: 'center',
    //   marginBottom: 5,
    //   fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    // },
    // month: {
    //   fontSize: theme.fontSizes.sm,
    //   color: theme.white,
    //   lineHeight: 1,
    //   textAlign: 'center',
    // },
    // controls: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   marginRight: theme.spacing.xl * 2,

    //   [theme.fn.smallerThan('xs')]: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginRight: 0,
    //     marginBottom: theme.spacing.xl,
    //   },
    // },
    // date: {
    //   flex: 1,
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'center',
    // },
    // control: {
    //   height: 28,
    //   width: '100%',
    //   color: theme.colors[theme.primaryColor][2],
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderRadius: theme.radius.md,
    //   transition: 'background-color 50ms ease',

    //   [theme.fn.smallerThan('xs')]: {
    //     height: 34,
    //     width: 34,
    //   },

    //   '&:hover': {
    //     backgroundColor: theme.colors[theme.primaryColor][5],
    //     color: theme.white,
    //   },
    // },
    // controlIcon: {
    //   [theme.fn.smallerThan('xs')]: {
    //     transform: 'rotate(-90deg)',
    //   },
    // },
    // statsFlex: {
    //   padding: '10px',
    //   width: '50%',
    //   flexDirection: 'column',
    // },
    // rotateIcon: {
    //   transform: 'rotate(-90deg)',
    // },

    // Extraprofiledetailscontainer: {

    //   padding: '10px 20px 20px 20px',
    //   borderRadius: "5px",
    //   height: '45vh',
    //   margin: '10px',

    //   boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
    // },
    // Extradetailscontainer1: {
    //   width: '50%',
    //   height: '100%',
    //   // border: '1px solid black',
    //   margin: '10px',
    //   padding: '20px',
    // },

    // Extradetailscontainer2: {
    //   width: '50%',
    //   height: '100%',
    //   // border: '1px solid black',
    //   margin: '10px',
    //   padding: '20px',
    // },

    // Extradetailsname: {
    //   width: '50%',
    //   height: '100%',
    //   // borderRight: '1px solid black',

    //   flexDirection: 'column',
    //   marginRight: '30px',

    // },
    // Extradetailsvalue: {
    //   width: '50%',
    //   height: '100%',
    //   // border: '1px solid black',
    //   flexDirection:'column',
    // },
    // Extradetailsnamebox: {
    //   height: '20%',
    //   borderBottom: '1px solid gray',
    //   display:'flex',
    //   // justifyContent: 'center',
    //   alignItems:'center',

    //   // border: '1px solid black',
    // },
    // Extradetailsvaluebox: {
    //   height: '20%',
    //   borderBottom: '1px solid gray',
    //   display:'flex',
    //   // justifyContent: 'center',
    //   alignItems:'center',
    //   // border: '1px solid black',
    // },


    outercontainer: {
        margin: '10px',
        height: '80vh',
        width: '98%',
        border: '1px solid black',
        justifyContent: 'space-around',
    },
    firstcontainer: {
        margin: '20px',
        width: '30%',
        height: '90%',
        // border: '1px solid black',
        borderRadius: '5px',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
        flexDirection: 'column',

    },
    secondcontainer: {
        margin: '20px',
        width: '50%',
        height: '90%',
        border: '1px solid black',
    },
    profileiconimage: {
        margin: '40px',
        // border: '1px solid black',
        marginBottom: '20px',
    },
    doctornamebox: {
        textAlign: 'center',

        // border: '1px solid black',
        // marginBottom:'10px',
    },
    doctorspeciality: {
        textAlign: 'center',

        // border: '1px solid black',
        // marginBottom:'10px',
    },
    doctornametext: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: '600',
        fontSize: '30px',
    },
    doctorspecialitytext: {
        color: 'gray',
        fontWeight: '400',
        fontSize: '20px'

    },
    editbuttonflex: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    },
    editButton: {
        backgroundColor: '#805bd4',
        color: 'white',
        transition: 'box-shadow 150ms ease, transform 100ms ease',
        marginTop: '10px',
        width: '60%',

        '&:hover': {
            backgroundColor: '#7351be',
            color: 'white',
        },
    },




}));

const Doctorprofilepage = ({ state, setState, setAutoLogout }) => {
    const { classes, theme } = useStyles();
    const [date, setDate] = useState(new Date(2021, 9, 24));

    return (
        <Flex className={classes.outercontainer}>
            <Flex className={classes.firstcontainer}>
                <Box className={classes.profileiconimage}>
                    <Avatar size={200} radius={120} mx="auto" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" alt="it's me" />
                </Box>
                <Box className={classes.doctornamebox}>
                    <Title order={1} className={classes.doctornametext}>Dr.Shobhit Gupta</Title>
                </Box>
                <Box className={classes.doctorspeciality}>
                    <Title order={5} className={classes.doctorspecialitytext}>Surgeon</Title>
                </Box>
                <Box className={classes.doctorspeciality}>
                    <Title order={5} className={classes.doctorspecialitytext}>Experience 16 years</Title>
                </Box>
                <Box className={classes.doctorspeciality}>
                    <Title order={5} className={classes.clinicaddress}>Surgeon Center</Title>
                </Box>
                <Flex className={classes.editbuttonflex}>
                    <Button fullWidth className={classes.editButton}>Edit Profile</Button>
                </Flex>

            </Flex>
            <Flex className={classes.secondcontainer}></Flex>
        </Flex>
    );


}
export default Doctorprofilepage;
