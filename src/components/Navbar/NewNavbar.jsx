import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Collapse,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import * as React from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { Logo } from "../Image/Logo";

export const NewNavbar = ({ state, logoutHandler }) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { isOpen, onToggle } = useDisclosure();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/viewprofile`;
    navigate(path);
  };
  const routeChange2 = () => {
    let path = `/doctorprofilepage`;
    navigate(path);
  };
  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        m={0}
      >
        <Container
          py={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack spacing="10" m={0} justify="space-between">
            <Logo width="32px" height="32px" justify={"center"} />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                {state.userType.trim() === "patient" && (
                  <ButtonGroup variant="link" spacing="8">
                    {PATIENT_NAV_ITEMS.map((item) => (
                      <Button
                        key={item.label}
                        onClick={() => navigate(item.href)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </ButtonGroup>
                )}
                {state.userType.trim() === "doctor" && (
                  <ButtonGroup variant="link" spacing="8">
                    {DOCTOR_NAV_ITEMS.map((item) => (
                      <Button
                        key={item.label}
                        onClick={() => navigate(item.href)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </ButtonGroup>
                )}
                {state.userType.trim() === "pharmacy" && (
                  <ButtonGroup variant="link" spacing="8">
                    {PHARMACY_NAV_ITEMS.map((item) => (
                      <Button
                        key={item.label}
                        onClick={() => navigate(item.href)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </ButtonGroup>
                )}

                <HStack spacing="3">
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <Avatar
                        size={"md"}
                        src={
                          "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={routeChange}> View Profile </MenuItem>
                      <MenuItem onClick={routeChange2}>Settings</MenuItem>
                      <MenuDivider />
                      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            )}
          </HStack>
          <Collapse in={isOpen} animateOpacity>
            <MobileNav state={state} logoutHandler={logoutHandler} />
          </Collapse>
        </Container>
      </Box>
    </Box>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("brand.100", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "brand.500" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"brand.500"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ state, logoutHandler }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {state.userType.trim() === "patient" &&
        PATIENT_NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      {state.userType.trim() === "doctor" &&
        DOCTOR_NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      {state.userType.trim() === "pharmacy" &&
        PHARMACY_NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      <Button onClick={logoutHandler}>Logout</Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const PATIENT_NAV_ITEMS = [
  {
    label: "Prescriptions",
    href: "/patient/home",
  },
];

const DOCTOR_NAV_ITEMS = [
  {
    label: "Home",
    href: "/doctor/home",
  },
  {
    label: "Prescription",
    href: "/doctor/create-prescription",
  },
  {
    label: "Profile",
    href: "/viewprofile",
  },
];

const PHARMACY_NAV_ITEMS = [
  {
    label: "Shared Prescriptions",
    href: "/pharmacy/home",
  },
  {
    label: "Share Code",
    href: "/pharmacy/scan",
  },
];
