import { Admin } from "../pages/Admin";
import  AdminAuth  from '../auth/AdminAuth';

const PrivateRoute = () => {
// gets state of isAuthenticated from AdminAuth
const { isAuthenticated } = AdminAuth();

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
