import { createStyles, Text, Title, TextInput, Button, Image } from '@mantine/core';
import { Logo } from '../../components/Image/Logo';


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#f7fafc',


    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
    paddingTop: theme.spacing.xl * 1,
    paddingBottom: theme.spacing.xl * 0,

  },
  body: {
    paddingRight: theme.spacing.xl * 4,
    paddingLeft: theme.spacing.xl * 1,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));


const QuestionnaireHeader = () => {
  const { classes } = useStyles();
  return (

    <div className={classes.wrapper}>
      <Logo width="5%" height="5%" justify={"center"} />
      <div className={classes.body}>
        <Title className={classes.title}>Qualifications and Additional Information</Title>
        {/* <Text weight={500} size="lg" mb={5}>
          Patient Personal Information
        </Text> */}
        <Text size="sm" color="dimmed">
          Compassionate and highly skilled physician committed to delivering personalized care
        </Text>
      </div>
    </div>
  );
}

export default QuestionnaireHeader;