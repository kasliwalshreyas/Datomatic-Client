import { Avatar, Text, Button, Paper, Box, createStyles, Table } from '@mantine/core';
import PatientInformationDetails from './PatientInformationDetails';


const useStyles = createStyles((theme) => ({
    body: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        padding: theme.spacing.md,
        height: '100%',

    },
    profileCard: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        width: '30%',
        height: '100%',
    },
    tableStyle: {
        width: '100%',
        marginTop: '40px',

    },
    info: {
        marginLeft: '4%',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        width: '60%',
        height: '100%',
    },



}));



const ProfileInformation = ({ data }) => {

    const { classes } = useStyles();

    // const tableHead = (
    //     <tr>

    //     </tr>
    // );

    const tableData = (
        <>
            <tr>
                <th>Age</th>
                <td>{data.age}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{data.gender}</td>
            </tr>
            <tr>
                <th>Height</th>
                <td>{data.height}</td>
            </tr>
            <tr>
                <th>Weight</th>

                <td>{data.weight}</td>
            </tr>
            <tr>
                <th>Blood Group</th>
                <td>{data.bloodGroup}</td>
            </tr>
        </>


    );


    return (
        <Box className={classes.body}>

            <Paper
                radius="md"
                withBorder
                p="lg"
                className={classes.profileCard}
            >
                <Avatar src={data.avatar} size={120} radius={120} mx="auto" />
                <Text align="center" size="lg" weight={500} mt="md">
                    {data.name}
                </Text>
                {/* <Text align="center" color="dimmed" size="sm">
                    {data.age} | {data.gender}
                </Text> */}

                <Table className={classes.tableStyle}>
                    <tbody>{tableData}</tbody>
                </Table>
            </Paper>
            <Paper
                radius="md"
                withBorder
                p="lg"
                className={classes.info}
            >
                <PatientInformationDetails />
            </Paper>
        </Box>
    );
}

export default ProfileInformation;