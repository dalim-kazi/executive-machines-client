
import { useQuery } from "react-query";
import UseAxiosInterceptor from "../axiosInterceptor/UseAxiosInterceptor";

 
const UseAllUser = () => {
    const [AxiosInterceptor]=UseAxiosInterceptor()
    const { data: AllUser = [] ,refetch} = useQuery({
        queryKey: ['/manageUser'],
        queryFn: async () => {
            const res = await AxiosInterceptor.get('/manageUser')
            return res.data
        }
    })
    return  [AllUser,refetch]
};

export default UseAllUser;