import React, { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
  Navigate,
} from "react-router-dom";
import { chakra, Button, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import Navbar from "./components/Navbar/Navbar";
import CreatePrescription from "./pages/Doctor/CreatePrescription";
import DoctorHome from "./pages/Doctor/DoctorHome";
import ScanPage from "./pages/Pharmacy/ScanPage";
import Viewprofile from "./pages/ProfilePage/Viewprofile";
import "./App.css";

import PrivateRoutes from "./components/Navigation/PrivateRoutes";
import DoctorRoutes from "./components/Navigation/DoctorRoutes";
import PatientRoutes from "./components/Navigation/PatientRoutes";
import PharmacyRoutes from "./components/Navigation/PharmacyRoutes";
import DefaultRoutes from "./components/Navigation/DefualtRoutes";
import HomeWrapper from "./components/Layout/HomeWrapper";
import PatientInfo from "./pages/PatientInfo/PatientInfo";
import PharmacyHome from "./pages/Pharmacy/PharmacyHome";
import PatientHome from "./pages/Patient/PatientHome";
import PatientQuestionnaire from "./pages/Patient/PatientQuestionnaire";
import DoctorQuestionnaire from "./pages/Doctor/DoctorQuestionnaire";
import Doctorprofilepage from "./pages/ProfilePage/Doctorprofilepage";
import DoctorProfile from "./pages/ProfilePage/DoctorProfile";
const App = () => {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
    userId: null,
    authLoading: true,
    error: null,
    theme: "light",
    userType: null,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiryDate = localStorage.getItem("expiryDate");
    const userType = localStorage.getItem("userType");

    if (!token && !expiryDate) {
      setState({
        ...state,
        isAuth: false,
        authLoading: false,
      });
      return;
    }

    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }

    const userId = localStorage.getItem("userId");
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();

    console.log(state);
    setState({
      ...state,
      isAuth: true,
      authLoading: false,
      token: token,
      userId: userId,
      userType: userType,
    });

    setState((prevState) => ({
      ...prevState,
      authLoading: false,
    }));
    setAutoLogout(remainingMilliseconds);
  }, []);

  const logoutHandler = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
      userId: null,
    });

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userType");
  };

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          exact
          element={
            <Login
              state={state}
              setState={setState}
              setAutoLogout={setAutoLogout}
            />
          }
        />
        <Route
          path="/signup"
          exact
          element={
            <SignUp
              state={state}
              setState={setState}
              setAutoLogout={setAutoLogout}
            />
          }
        />
        <Route
          element={
            <PrivateRoutes
              isAuth={state.isAuth}
              AuthLoading={state.authLoading}
            />
          }
        >
          <Route path="/doctor" element={<Navigate to={"doctor/home"} />} />
          <Route path="/patient" element={<Navigate to={"patient/home"} />} />
          <Route path="/pharmacy" element={<Navigate to={"pharmacy/home"} />} />

          <Route
            path="patient"
            exact
            element={
              <PatientRoutes
                userType={state.userType}
                AuthLoading={state.authLoading}
              />
            }
          >
            <Route
              path="home"
              exact
              element={
                <HomeWrapper state={state} logoutHandler={logoutHandler}>
                  <PatientHome
                    state={state}
                    setState={setState}
                    setAutoLogout={setAutoLogout}
                  />
                </HomeWrapper>
              }
            />
            <Route
              path="questionnaire"
              exact
              element={
                <PatientQuestionnaire
                  state={state}
                  setState={setState}
                  setAutoLogout={setAutoLogout}
                />
              }
            />
            <Route path="*" element={<Navigate to={"home"} />} />
          </Route>

          <Route
            path="doctor"
            exact
            element={
              <DoctorRoutes
                userType={state.userType}
                AuthLoading={state.authLoading}
              />
            }
          >
            <Route
              path="home"
              exact
              element={
                <HomeWrapper state={state} logoutHandler={logoutHandler}>
                  <DoctorHome
                    state={state}
                    setState={setState}
                    setAutoLogout={setAutoLogout}
                  />
                </HomeWrapper>
              }
            />
            <Route
              path="patient/:phoneNumber"
              exact
              element={
                <HomeWrapper state={state} logoutHandler={logoutHandler}>
                  <PatientInfo state={state} logoutHandler={logoutHandler} />
                </HomeWrapper>
              }
            />
            <Route
              path="questionnaire"
              exact
              element={
                <DoctorQuestionnaire
                  state={state}
                  setState={setState}
                  setAutoLogout={setAutoLogout}
                />
              }
            />
            <Route
              path="create-prescription"
              exact
              element={
                <HomeWrapper state={state} logoutHandler={logoutHandler}>
                  <CreatePrescription
                    state={state}
                    setState={setState}
                    setAutoLogout={setAutoLogout}
                  />
                </HomeWrapper>
              }
            />
            <Route path="*" element={<Navigate to={"home"} />} />
          </Route>

          <Route
            path="pharmacy"
            exact
            element={
              <PharmacyRoutes
                userType={state.userType}
                AuthLoading={state.authLoading}
              />
            }
          >
            <Route
              path="home"
              exact
              element={
                <HomeWrapper state={state} logoutHandler={logoutHandler}>
                  <PharmacyHome
                    state={state}
                    setState={setState}
                    setAutoLogout={setAutoLogout}
                  />
                </HomeWrapper>
              }
            />
            <Route
              path="scan"
              exact
              element={
                <HomeWrapper state={state} logoutHandler={logoutHandler}>
                  <ScanPage
                    state={state}
                    setState={setState}
                    setAutoLogout={setAutoLogout}
                  />
                </HomeWrapper>
              }
            />
            <Route path="*" element={<Navigate to={"home"} />} />
          </Route>

          <Route
            path="/viewprofile"
            exact
            element={
              <HomeWrapper state={state} logoutHandler={logoutHandler}>
                <Viewprofile
                  state={state}
                  setState={setState}
                  setAutoLogout={setAutoLogout}
                />
              </HomeWrapper>
            }
          />
          <Route
            path="/doctorprofilepage"
            exact
            element={
              <HomeWrapper state={state} logoutHandler={logoutHandler}>
                <DoctorProfile
                  state={state}
                  setState={setState}
                  setAutoLogout={setAutoLogout}
                />
              </HomeWrapper>
            }
          />
          <Route
            path="*"
            element={
              <DefaultRoutes
                userType={state.userType}
                AuthLoading={state.authLoading}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
