import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Text,
    Title,
    Avatar,
    UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
    IconUserCircle
} from '@tabler/icons';
import { Logo } from '../Image/Logo';
import { useState } from 'react';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: '#805BD4'
        },
    },

    linkLabel: {
        marginRight: 5,
    },


    dropdownLink: {
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: '#805BD4'
        },

    }

}));



export function AnotherNewNavbar({ state, logoutHandler }) {
    const { classes } = useStyles();
    // const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const user = {
        "name": "Jane Spoonfighter",
        "email": "janspoon@fighter.dev",
        "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
    }

    const links = [
        {
            label: 'Home',
            link: 'home',
        },
        {
            label: 'Profile',
            link: '/doctorprofilepage',
        },
        {
            label: 'Contact',
            link: '/viewprofile',
        },
        // {
        //     label: 'Login',
        //     link: '/login',
        // },
        // {
        //     label: 'Register',
        //     link: '/register',
        // },
    ];

    const items = links.map((link) => {

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
            >
                {link.label}
            </a>
        );
    });

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} >
            <Container className={classes.inner} fluid>
                <Group>
                    <Logo width={10} />
                    <Title order={3} style={{ marginLeft: 10, color: '#805BD4' }}> Datomatic </Title>
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Menu
                    width={260}
                    position="bottom-end"
                    transition="pop-top-right"
                    onClose={() => setUserMenuOpened(false)}
                    onOpen={() => setUserMenuOpened(true)}
                >
                    <Menu.Target>
                        <UnstyledButton
                        // className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                        >
                            <Group spacing={7}>
                                <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                                <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                                    {user.name}
                                </Text>
                                <IconChevronDown size={12} stroke={1.5} />
                            </Group>
                        </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                        {/* <Menu.Label>Settings</Menu.Label> */}
                        <Menu.Item icon={<IconUserCircle size={14} stroke={1.5} />} component="a" href='/viewprofile'
                            className={classes.dropdownLink}
                        >Profile</Menu.Item>
                        <Menu.Item icon={<IconLogout size={14} stroke={1.5} />} onClick={logoutHandler}
                            className={classes.dropdownLink}
                        >Logout</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Container>
        </Header>
    );
}

export default AnotherNewNavbar;