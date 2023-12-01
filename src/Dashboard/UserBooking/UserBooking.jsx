import {Typography, Avatar} from "@material-tailwind/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import UseAxiosInterceptor from "../../Hook/axiosInterceptor/UseAxiosInterceptor";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseUserBooking from "../../Hook/UseUserBooking/UseUserBooking";
import UseSectionTittle from "../../Hook/UseSectionTittle/UseSectionTittle";
const TABLE_HEAD = ['#',"Photo", "Product Details", "User Details", "Delete","Payment"];
const UserBooking = () => {
   const [bookings,refetch]=UseUserBooking()
  const [AxiosInterceptor] = UseAxiosInterceptor()

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "your order delete",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosInterceptor.delete(`/booking/${id}`)
        .then((data) => {
          if (data.data.deletedCount) {
              refetch()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
        }
        })
        
      }
    })
   
      
   }
    return (
      <>
        <UseSectionTittle HeaderTittle={'---Booking---'} subHeaderTittle={'User Booking'}></UseSectionTittle>
       <table className="mx-auto xl:w-8/12 w-full md:mt-0 mt-10 bg-white">
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
          {bookings?.map(
            ({_id,name,Mobile_number,quantity,image,price,productName,category,payment}, index) => {
              const isLast = index ===bookings?.length - 1;
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
                      <Avatar src={image} className="w-20 h-20" />
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
                   <button className="text-red-600 text-xl" disabled={payment==='complete'}> <RiDeleteBin6Line onClick={()=>handleDelete(_id)}></RiDeleteBin6Line></button>
                      </td>
                      <td className={classes}>
                    {
                      payment ? <p className="bg-orange-600 px-3 rounded-md"><Link>{payment}</Link></p>: <Typography className="bg-orange-600 px-3 rounded-md"><Link to={`/dashboard/payment/${_id}`}>Pay</Link></Typography>
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

export default UserBooking;