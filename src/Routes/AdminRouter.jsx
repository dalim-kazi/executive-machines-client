import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hook/UseAdmin/UseAdmin";

const AdminRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin,isLoading]=UseAdmin()
    const location =useLocation()
    if (loading ||isLoading) {
        return <div>loading.....</div>
    }
    if (user &&isAdmin) {
        return children
    }
    return   <Navigate to="/singIn" state={{ from: location }} replace />
};

export default AdminRouter;