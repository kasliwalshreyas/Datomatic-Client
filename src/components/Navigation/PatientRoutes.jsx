import { Navigate, Outlet } from "react-router-dom";

const PatientRoutes = ({ userType, AuthLoading }) => {

  if (AuthLoading) {
    return <></>;
  }

  if (userType.trim() === 'patient') {
    return <Outlet />;
  }
  else if (userType.trim() === 'doctor') {
    return <Navigate to="/doctor/home" />
  }
  else if (userType.trim() === 'pharmacy') {
    return <Navigate to="/pharmacy/home" />
  }

  <Navigate to="/login" />
};

export default PatientRoutes;
