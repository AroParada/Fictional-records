import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

const AdminAuth = () => {
  // Authentication logic here
  const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      checkAuthentication();
    }, []);

    const checkAuthentication = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
        console.log("User:", user);
      } catch (err) {
        setIsAuthenticated(false);
        console.error("User not authenticated:", err);
      }
    };
    // returns the state
    return { isAuthenticated }
};

export default AdminAuth;