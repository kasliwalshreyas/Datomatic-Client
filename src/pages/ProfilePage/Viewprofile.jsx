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
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    padding: theme.spacing.md,
    display: 'flex',
    // minHeight: '200px',
    // minWidth: '200px',
    // backgroundColor: 'red'

  },
  borderFlex: {
    background: 'white',
    padding: '10px 20px 20px 20px',
    borderRadius: "5px",
    // borderColor: "#E2E8F0",
    // borderWidth: "2px",
    boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",

    margin: "10px"
  },
  borderFlex1: {
    // border: '1px solid #e0e0e0',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '50%',
    height: '100%',
    // backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',



  },
  borderFlex2: {
    // border: '1px solid #e0e0e0',
    // borderRadius: '5px',
    borderLeft: '1px solid gray',
    padding: '10px',
    margin: '10px',
    width: '50%',
    height: '100%',
    // backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-around',



  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },
  infocontainer: {


    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '50%',
    // alignItems: 'center',

  },
  infocontentbox: {
    // textAlign: 'center',
    padding: '10px',



  },
  infolongtext: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,

  },
  infoshorttext: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    color: theme.black,
    // marginTop: '7px',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
  editButton: {
    backgroundColor: '#805bd4',
    color: 'white',
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    marginTop: '10px',

    '&:hover': {
      backgroundColor: '#7351be',
      color: 'white',
    },
  },
  root: {
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
      } 100%)`,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    display: 'flex',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.lg,
    color: theme.colors[theme.primaryColor][6],
  },
  stat: {
    minWidth: 98,
    paddingTop: theme.spacing.xl,
    minHeight: 140,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.white,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },
  value: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    color: theme.black,
  },
  count: {
    color: theme.colors.gray[6],
  },
  day: {
    fontSize: 44,
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  month: {
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 0,
      marginBottom: theme.spacing.xl,
    },
  },
  date: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  control: {
    height: 28,
    width: '100%',
    color: theme.colors[theme.primaryColor][2],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    transition: 'background-color 50ms ease',

    [theme.fn.smallerThan('xs')]: {
      height: 34,
      width: 34,
    },

    '&:hover': {
      backgroundColor: theme.colors[theme.primaryColor][5],
      color: theme.white,
    },
  },
  controlIcon: {
    [theme.fn.smallerThan('xs')]: {
      transform: 'rotate(-90deg)',
    },
  },
  statsFlex: {
    padding: '10px',
    width: '50%',
    flexDirection: 'column',
  },
  rotateIcon: {
    transform: 'rotate(-90deg)',
  },

  Extraprofiledetailscontainer: {

    padding: '10px 20px 20px 20px',
    borderRadius: "5px",
    height: '45vh',
    margin: '10px',

    boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
  },
  Extradetailscontainer1: {
    width: '50%',
    height: '100%',
    // border: '1px solid black',
    margin: '10px',
    padding: '20px',
  },

  Extradetailscontainer2: {
    width: '50%',
    height: '100%',
    // border: '1px solid black',
    margin: '10px',
    padding: '20px',
  },

  Extradetailsname: {
    width: '50%',
    height: '100%',
    // borderRight: '1px solid black',
    
    flexDirection: 'column',
    marginRight: '30px',
    
  },
  Extradetailsvalue: {
    width: '50%',
    height: '100%',
    // border: '1px solid black',
    flexDirection:'column',
  },
  Extradetailsnamebox: {
    height: '20%',
    borderBottom: '1px solid gray',
    display:'flex',
    // justifyContent: 'center',
    alignItems:'center',
    
    // border: '1px solid black',
  },
  Extradetailsvaluebox: {
    height: '20%',
    borderBottom: '1px solid gray',
    display:'flex',
    // justifyContent: 'center',
    alignItems:'center',
    // border: '1px solid black',
  },





}));


const Viewprofile = ({ state, setState, setAutoLogout }) => {

  const { classes, theme } = useStyles();
  const [date, setDate] = useState(new Date(2021, 9, 24));


  return (
    <Flex sx={{ flexDirection: 'column', padding: '10px', width: '100vw' }}>
      <Flex w={'100vw'}>
        <Flex size={'100vw'} w={'50%'} className={classes.borderFlex}>
          <Flex className={classes.borderFlex1} w={'30%'} >
            {/* <Card withBorder radius="md" className={classes.card}> */}
            <Avatar size={120} radius={120} mx="auto" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" alt="it's me" />
            {/* </Card> */}
            <Title order={3} mt={'15px'} mb={'20px'}>Shreyas Kasliwal</Title>
            <Button fullWidth className={classes.editButton}>Edit Profile</Button>
          </Flex>

          <Flex className={classes.borderFlex2} w={'70%'} >


            <Flex className={classes.infocontainer}>
              <Box className={classes.infocontentbox} ml={'20px'}>
                <Title order={4} className={classes.infolongtext}>Age</Title>
                <Title order={5} className={classes.infoshorttext} >21</Title>

              </Box>
              <Box className={classes.infocontentbox} ml={'20px'}>
                <Title order={4} className={classes.infolongtext}>Gender</Title>
                <Title order={5} className={classes.infoshorttext} >Male</Title>
              </Box>
              <Box className={classes.infocontentbox} ml={'20px'}>
                <Title order={4} className={classes.infolongtext}>Phoneno.</Title>
                <Title order={5} className={classes.infoshorttext} >9796954838</Title>
              </Box>
            </Flex>

            <Flex className={classes.infocontainer}>
              <Box className={classes.infocontentbox} mr={'20px'}>
                <Title order={4} className={classes.infolongtext}>Address</Title>
                <Title order={5} className={classes.infoshorttext}>Uhaaaaaa's village</Title>
              </Box>
              <Box className={classes.infocontentbox} mr={'20px'}>
                <Title order={4} className={classes.infolongtext}>Name</Title>
                <Title order={5} className={classes.infoshorttext}>Vital</Title>
              </Box>
              <Box className={classes.infocontentbox} mr={'20px'}>
                <Title order={4} className={classes.infolongtext}>Name</Title>
                <Title order={5} className={classes.infoshorttext}>Vital</Title>
              </Box>
            </Flex>

            {/* //Shobhit's code */}
          </Flex>

        </Flex>
        <Flex className={classes.statsFlex} >
          <Group sx={{ flex: 1 }} m={'10px'}>
            <ProfileStatsCard stat={data[0]} classes={classes} />
            <ProfileStatsCard stat={data[1]} classes={classes} />
          </Group>
          <Group sx={{ flex: 1 }} m={'10px'}>
            <ProfileStatsCard stat={data[2]} classes={classes} />
            <ProfileStatsCard stat={data[3]} classes={classes} />
          </Group>
        </Flex>
      </Flex>

      <Extraprofiledetails classes={classes}>
      </Extraprofiledetails>

    </Flex>
  );
}

export default Viewprofile;
