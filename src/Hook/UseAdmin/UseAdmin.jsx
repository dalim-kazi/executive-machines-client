import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "react-query";
import UseAxiosInterceptor from "../axiosInterceptor/UseAxiosInterceptor";

const UseAdmin = () => {
    const { user } = useContext(AuthContext)
    const[AxiosInterceptor]=UseAxiosInterceptor()
    const { data: isAdmin,isLoading } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await AxiosInterceptor.get(`https://executive-machines-server.vercel.app/users/admin/${user?.email}`)
            return res.data.role
        }
    })
    return  [isAdmin,isLoading]
};

export default UseAdmin;