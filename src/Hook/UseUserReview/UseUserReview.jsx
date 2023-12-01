import { useQuery } from "react-query";
import UseAxiosInterceptor from "../axiosInterceptor/UseAxiosInterceptor";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UseUserReview = () => {
    const [AxiosInterceptor] = UseAxiosInterceptor()
    const {user}=useContext(AuthContext)
    const { data: userReview=[] } = useQuery({
        queryKey: [user?.email, '/review/user/'],
        queryFn: async () => {
            const res = await AxiosInterceptor.get(`/review/user/${user?.email}`)
            return res.data
        }
    })
    return  [userReview]
};

export default UseUserReview;