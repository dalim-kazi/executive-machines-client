import { useQuery } from "react-query";
import UseAxiosInterceptor from "../../Hook/axiosInterceptor/UseAxiosInterceptor";
import { Avatar, Typography } from "@material-tailwind/react";
 
import { Link } from "react-router-dom";
import UseSectionTittle from "../../Hook/UseSectionTittle/UseSectionTittle";
const TABLE_HEAD = [ "#", "Photo", "Product Details", "User Details","Payment"];
const ManageBooking = () => {
const [AxiosInterceptor]=UseAxiosInterceptor()
    const { data: manageBookings=[] } = useQuery({
        queryKey: ['/Booking/admin'],
        queryFn: async () => {
            const res = await AxiosInterceptor.get('/Booking/admin')
            return res.data
        }
    })

  
    return (
      <>
      <UseSectionTittle HeaderTittle={"---admin---"} subHeaderTittle={'MANAGE BOOKING'}></UseSectionTittle>
      <table className="mx-auto xl:w-8/12 w-full md:mt-0 mt-10 mb-10 bg-white">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="bg-orange-500 py-4"
              >
                   <Typography>{head}</Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {manageBookings?.map(
            ({_id,name,Mobile_number,quantity,image,price,productName,category,payment}, index) => {
              const isLast = index === manageBookings?.length - 1;
              const classes = isLast
                ? "text-center px-4 lg:px-12"
                : "text-center px-4 lg:px-12 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className="w-10 px-2">
                    {index +1}
                  </td>
                  <td>
                    <div>
                      <Avatar src={image} className="w-28 h-28" />
                    </div>
                  </td>
                  <td className={classes}>
                          <Typography variant="small">{category}</Typography>
                          <Typography variant="small">{productName.slice(0, 15)}...</Typography>
                          <Typography color="orange">৳{price}</Typography>
                          <Typography variant="small">quantity : {quantity}</Typography>
                      </td>
                      
                  <td className={classes}>
                    <div>
                       
                          <Typography variant="small">{name}</Typography>
                          <Typography variant="small">{Mobile_number}</Typography>
                    </div>
                      </td>
                      
                   
                      <td className={classes}>
                    {
                      payment ? <><Typography className="bg-green-600 px-3 rounded-md">{payment}</Typography></>:<Typography className="bg-orange-600 px-3 rounded-md"><Link>Padding</Link></Typography>
                  }
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
      </>
    );
};

export default ManageBooking;