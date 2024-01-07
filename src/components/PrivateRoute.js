import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Admin } from "../pages/Admin";

const PrivateRoute = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true)
      console.log('User:', user);
    } catch (err) {
      setIsAuthenticated(false);
      console.error('User not authenticated:', err);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <Admin />
      ) : (
        <p>User is not authenticated</p>
      )}
    </div>
  );
};

export default PrivateRoute;
