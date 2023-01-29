import { Avatar, Box, createStyles, Paper, Text, Title } from "@mantine/core";
import { Table } from "react-bootstrap";


const useStyles = createStyles((theme) => ({
    outerDiv: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "flex-start",
        // alignItems: "center",
        // justifyContent: "center",
        height: "80vh",
        width: "90vw",
        margin: "5vh 5vw",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : 'white',
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.sm,
        border: "1px solid  theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]",
    },
    profileCard: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        height: "80vh",
        width: "100%",
        padding: "5vh 5vw",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : 'white',
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.sm,
        border: "1px solid  theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]",
    },
    profileInfo: {
        height: "80vh",
        width: "100%",
        padding: "5vh 5vw",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : 'white',
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.sm,

        border: "1px solid  theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]",
    },

}));


const DoctorProfile = ({ state, setState, setAutoLogout }) => {

    const { classes } = useStyles();

    return (
        <>
            <Box className={classes.outerDiv}>
                <Paper className={classes.profileCard}>
                    <Avatar src="avatar.png" alt="it's me" size={200} mb={15} />
                    {/* <Paper w={'100%'} ml={'50px'}>
                        <Title>Name</Title>
                        <Title order={2}>Shreyas Kasliwal</Title>
                        <Text order={6} fw={500}>MBBS Doctor</Text>
                    </Paper> */}
                    <Table withBorder>
                        <tbody>
                            <tr>
                                <td>
                                    <Title order={6} p={0} m={0}>Name</Title>
                                    <Text order={6} fw={500}>Degree</Text>
                                </td>
                                <td>
                                    <Title order={6}>Shreyas Kasliwal</Title>
                                    <Text order={6} fw={500}>MBBS Doctor</Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>

                    </Table>

                </Paper>
                <Paper className={classes.profileInfo}>

                </Paper>



            </Box>

        </>
    );
}

export default DoctorProfile;