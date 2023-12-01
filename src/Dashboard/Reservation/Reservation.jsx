import { useLoaderData, useNavigate } from "react-router-dom";
import { Card,CardHeader,CardBody,Typography, Input} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UseAxiosInterceptor from "../../Hook/axiosInterceptor/UseAxiosInterceptor";
import Swal from "sweetalert2";
 
const Reservation = () => {
    const products = useLoaderData()
    const { user } = useContext(AuthContext)
    const [AxiosInterceptor] = UseAxiosInterceptor()
    const Navigate =useNavigate()
    const { category, image, price, productName, _id } = products
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
      const bookingDetails = { itemId: _id, name: user?.displayName, email: user?.email, Mobile_number: data.Mobile_number, quantity: parseFloat(data.quantity), image, price:price*parseFloat(data.quantity), productName, category }
        AxiosInterceptor.post('/booking', bookingDetails)
            .then((data) => {
                if (data.data.insertedId) {
                    reset()
                    Navigate('/dashboard/userBooking')
                    Swal.fire({
                        icon:"success",
                        title: 'Successful your order',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
            }
        })
    
    };
    return (
        <>
          <Card className="w-full md:w-8/12 lg:flex-row mx-auto mt-32">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full hover:scale-125 transition-all duration-500 cursor-pointer"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2 italic">
         {productName}
        </Typography>
        <Typography color="gray" className="mb-8 font-bold text-orange-700 text-lg">
        ৳{price}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex w-full flex-col gap-3">
             <Input  {...register("Mobile_number", {required: true, minLength:11, maxLength: 11})}  variant="standard" label="Mobile number" />
             <Input {...register("quantity", {required: true})} type="number" variant="standard" 
                                label="quantity" />  
             <Input className="w-1/2"  type="submit" variant="standard" 
                                 value={'submit'} />                 
        </div>              
         </form>
      </CardBody>
    </Card>


        </>
    );
};

export default Reservation;