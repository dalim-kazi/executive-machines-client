import { useQuery } from "react-query";
import UseAxiosInterceptor from "../axiosInterceptor/UseAxiosInterceptor";

const UseAllPayment = () => {
    const [AxiosInterceptor]=UseAxiosInterceptor()
    const { data: allPayment=[] } = useQuery({
        queryKey: ['/admin/payment'],
        queryFn: async () => {
            const res = await AxiosInterceptor.get('/admin/payment')
            return res.data
        }
    })
    return  [allPayment]
};

export default UseAllPayment;