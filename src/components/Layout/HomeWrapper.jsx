import React, { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import { chakra, Button, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Navbar from "../Navbar/Navbar";
import { NewNavbar } from "../Navbar/NewNavbar";

const HomeWrapper = ({ state, logoutHandler, children }) => {
  return (
    <Fragment>
      <chakra.header>
        {/* <Navbar state={state} logoutHandler={logoutHandler} /> */}
        <NewNavbar state={state} logoutHandler={logoutHandler} />
        {state.userType === "doctor" && (
          <Stack
            direction="row"
            spacing={4}
            position={"fixed"}
            bottom={"5%"}
            right={"2%"}
            zIndex={100}
          >
            <Link as={Link} to="/doctor/create-prescription">
              <Button leftIcon={<AddIcon />} variant="primary">
                Create Prescription
              </Button>
            </Link>
          </Stack>
        )}
      </chakra.header>
      <chakra.main>{children}</chakra.main>
      <chakra.footer></chakra.footer>
    </Fragment>
  );
};

export default HomeWrapper;
