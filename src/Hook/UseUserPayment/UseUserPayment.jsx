import { useContext } from "react";
import UseAxiosInterceptor from "../axiosInterceptor/UseAxiosInterceptor";
import { useQuery } from "react-query";
import { AuthContext } from "../../provider/AuthProvider";

 
const UseUserPayment = () => {
    const [AxiosInterceptor] = UseAxiosInterceptor()
    const {user}=useContext(AuthContext)
    const { data: paymentHistory=[] } = useQuery({
        queryKey: [user?.email,'paymentUser'],
        queryFn: async () => {
            const res = await AxiosInterceptor.get(`/paymentUser/${user?.email}`)
            return res.data
        }
    })
    return  [paymentHistory]
};

export default UseUserPayment;