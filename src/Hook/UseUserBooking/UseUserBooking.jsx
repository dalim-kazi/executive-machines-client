import { useQuery } from "react-query";
import UseAxiosInterceptor from "../axiosInterceptor/UseAxiosInterceptor";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const UseUserBooking = () => {
    const {user}=useContext(AuthContext)
    const [AxiosInterceptor] = UseAxiosInterceptor()
    const { data: bookings=[],refetch} = useQuery({
        queryKey: [user?.email, '/booking/user'],
        queryFn: async () => {
            const res = await AxiosInterceptor.get(`/booking/user?email=${user?.email}`)
            return res.data
        }
    })
    return [bookings,refetch]
};

export default UseUserBooking;