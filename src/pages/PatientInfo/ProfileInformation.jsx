import {
  Avatar,
  Text,
  Button,
  Paper,
  Box,
  createStyles,
  Table,
} from "@mantine/core";
import PatientInformationDetails from "./PatientInformationDetails";

const useStyles = createStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "row",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    height: "100%",
  },
  profileCard: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    width: "30%",
    height: "100%",
  },
  tableStyle: {
    width: "100%",
    marginTop: "40px",
  },
  info: {
    marginLeft: "4%",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    width: "60%",
    height: "100%",
  },
}));

const ProfileInformation = ({ data }) => {
  const { classes } = useStyles();
  console.log(data, "data from ProfileInformation");
  const { personalInformation, basicMedicalInformation, detailMedicalInformation } = data;
  console.log(personalInformation, "personalInformation");
  console.log(basicMedicalInformation, "basicMedicalInformation");
  console.log(detailMedicalInformation, "detailMedicalInformation");

  const tableData = (
    <>
      <tr>
        <th>Age</th>
        <td>{personalInformation.age.description}</td>
      </tr>
      <tr>
        <th>Height</th>
        <td>{personalInformation.height.description}</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>{personalInformation.weight.description}</td>
      </tr>
      <tr>
        <th>Blood Group</th>
        <td>{personalInformation.bloodGroup.description}</td>
      </tr>
      <tr>
        <th>Pregnant</th>
        <td>{basicMedicalInformation.isPregnant.description}</td>
      </tr>
      <tr>
        <th>Smoker</th>
        <td>{basicMedicalInformation.smoking.description}</td>
      </tr>
      <tr>
        <th>Alcoholic</th>
        <td>{basicMedicalInformation.alcohol.description}</td>
      </tr>
      <tr>
        <th>Raised Blood Pressure</th>
        <td>{basicMedicalInformation.bloodPressure.description}</td>
      </tr>
    </>
  );

  return (
    <Box className={classes.body}>
      <Paper radius="md" withBorder p="lg" className={classes.profileCard}>
        <Avatar src={personalInformation.avatar} size={120} radius={120} mx="auto" />
        <Text align="center" size="lg" weight={500} mt="md">
          {personalInformation.name.description}
        </Text>
        <Table className={classes.tableStyle}>
          <tbody>{tableData}</tbody>
        </Table>

      </Paper>
      <Paper radius="md" className={classes.info}>
        <PatientInformationDetails data={detailMedicalInformation} basicMedicalInformation={basicMedicalInformation} />
      </Paper>
    </Box>
  );
};

export default ProfileInformation;
