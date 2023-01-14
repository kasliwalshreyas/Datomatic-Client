import { Navigate, Outlet } from "react-router-dom";

const DoctorRoutes = ({ userType, AuthLoading }) => {

  if (AuthLoading) {
    return <></>;
  }

  if (userType.trim() === 'doctor') {
    return <Outlet />;
  }
  else if (userType.trim() === 'patient') {
    return <Navigate to="/patient/home" />
  }
  else if (userType.trim() === 'pharmacy') {
    return <Navigate to="/pharmacy/home" />
  }

  <Navigate to="/login" />
};

export default DoctorRoutes;