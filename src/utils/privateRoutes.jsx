import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
const PrivateRoutes = () => {
  const [token, setToken] = useState(localStorage.getItem("auth_token"));

  useEffect(() => {
    const handleTokenChange = () => {
      setToken(localStorage.getItem("auth_token"));
    };

    window.addEventListener("storage", handleTokenChange);

    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
