import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location =useLocation()
    if (loading) {
        return <div>loading.....</div>
    }
    if (user) {
        return children
    }
    return   <Navigate to="/singIn" state={{ from: location }} replace />
};

export default PrivateRouter;