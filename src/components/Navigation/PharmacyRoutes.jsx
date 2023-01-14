import { Navigate, Outlet } from "react-router-dom";

const PharmacyRoutes = ({ userType, AuthLoading }) => {

  if (AuthLoading) {
    return <></>;
  }

  if (userType.trim() === 'pharmacy') {
    return <Outlet />;
  }
  else if (userType.trim() === 'patient') {
    return <Navigate to="/patient/home" />
  }
  else if (userType.trim() === 'doctor') {
    return <Navigate to="/doctor/home" />
  }

  <Navigate to="/login" />
};

export default PharmacyRoutes;