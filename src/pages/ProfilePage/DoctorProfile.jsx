import { theme } from "@chakra-ui/pro-theme";
import { Avatar, Box, createStyles, Flex, Paper, Text, Title, Button } from "@mantine/core";
import { useHover } from '@mantine/hooks';
import { Table } from "react-bootstrap";


const useStyles = createStyles((theme) => ({
    outerdiv: {
        // backgroundColor: '#E5E0FF',
        marginLeft: '30vh',
        marginRight: '30vh',
        marginTop: '7vh',
        marginBottom: '10vh',
        // padding: '20px',
        // paddingBottom: '10vh',
        // borderRadius: '10px',
        borderTopRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '100px',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        top: '0',
        left: '0',
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        // width: '80vw',
    },
    topcontainer: {
        height: '25vh',
        // width: '90%',
        // marginLeft: '5%',
        // marginRight: '5%',
        // marginBottom: '5vh',
        backgroundColor: '#C780FA',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '100px',
    },
    profilecontainer: {
        height: '15vh',
        width: '100%',
        // marginLeft: '5%',
        // marginRight: '5%',
        backgroundColor: 'white',
        // borderBottom: '1px solid black',
    },
    detailsoutercontainer: {

    },
    detailsleftcolumn: {
        width: '30%',
        height: '80vh',
        marginLeft: '5%',
        backgroundColor: '#white',
        flexDirection: 'column',
    },
    detailsrightcolumn: {
        width: '60%',
        height: '80vh',
        marginRight: '5%',
        backgroundColor: 'white',
        flexDirection: 'column',

    },
    smallbox: {
        width: "100%",
        height: '10vh',
        backgroundColor: 'white',
        borderBottom: "1px solid #DDDDDD",
        padding: '10px',
        fontWeight: 'bold',
        color: '#7F8487',

    },
    largebox: {
        width: "100%",
        height: '10vh',
        backgroundColor: 'white',
        borderBottom: "1px solid #DDDDDD",
        padding: '10px',
        fontWeight: 'bold',
        color: '#7F8487',

    },
    avatardiv: {
        position: 'absolute',
        top: '15vh',
        left: '7vw',
    },
    profiletext: {
        paddingLeft: '30px',
        paddingTop: '10px',
        paddingLeft: '30px',
        marginLeft: '25%',
        // backgroundColor: 'red',
        fontWeight: 'bold',
        color: '#413F42',
        flexDirection: 'column',
    },
    editprofilebutton: {
        backgroundColor: '#C780FA',
        width: '15%',
        position: 'absolute',
        top: '30vh',
        right: '7vw',
    }



}));


const DoctorProfile = ({ state, setState, setAutoLogout }) => {

    const { classes } = useStyles();
    const { hovered, ref } = useHover();

    return (
        <>
            <Flex className={classes.outerdiv}>
                <Flex className={classes.topcontainer}></Flex>
                <Flex className={classes.profilecontainer}>
                    <Avatar className={classes.avatardiv} size={180} radius={120} mx="auto" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" alt="it's me" />
                    <Flex className={classes.profiletext}>
                        <Title order={1} >Profile</Title>
                        <Title order={6} >Update your profile and personal details.</Title>
                        <Button className={classes.editprofilebutton} ref={ref}>
                            Edit Profile
                        </Button>
                    </Flex>
                </Flex>
                <Flex className={classes.detailsoutercontainer}>
                    <Flex className={classes.detailsleftcolumn}>
                        <Flex className={classes.smallbox} sx={{ borderTop: '1px solid #DDDDDD', }}><Title order={4} >Username</Title></Flex>
                        <Flex className={classes.smallbox}> <Title order={4} >Phone no.</Title> </Flex>
                        <Flex className={classes.smallbox}> <Title order={4} >Address</Title> </Flex>
                        <Flex className={classes.smallbox}> <Title order={4} >Pincode</Title> </Flex>
                        <Flex className={classes.smallbox}> <Title order={4} >Hospital Name</Title> </Flex>
                        <Flex className={classes.smallbox}> <Title order={4} >Email</Title> </Flex>
                        <Flex className={classes.smallbox}> <Title order={4} >Profession</Title> </Flex>
                        <Flex className={classes.smallbox} sx={{ borderBottom: '0px', }}> <Title order={4} >Nationality</Title> </Flex>
                    </Flex>
                    <Flex className={classes.detailsrightcolumn}>
                        <Flex className={classes.largebox} sx={{ borderTop: '1px solid #DDDDDD', }}> <Title order={4} >Shobhit Gupta</Title> </Flex>
                        <Flex className={classes.largebox}> <Title order={4} >6386150166</Title> </Flex>
                        <Flex className={classes.largebox}> <Title order={4} >116/b-1 Morya Bldg1, Sane Guruji Marg, Parel, Mumbai</Title> </Flex>
                        <Flex className={classes.largebox}> <Title order={4} >400012</Title> </Flex>
                        <Flex className={classes.largebox}> <Title order={4} >AIIMS Mumbai</Title> </Flex>
                        <Flex className={classes.largebox}> <Title order={4} >Shobhitgpt01@gmail.com</Title> </Flex>
                        <Flex className={classes.largebox}> <Title order={4} >Surgeon</Title> </Flex>
                        <Flex className={classes.largebox} sx={{ borderBottom: '0px', }}> <Title order={4} >Indian</Title> </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </>
    );
}

export default DoctorProfile;