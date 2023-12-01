import {Card,Input,Typography,} from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from 'react-hook-form'; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SingIn = () => {
  const { register, handleSubmit,reset } = useForm();
  const { singInAccount} = useContext(AuthContext)
  const location  = useLocation()
  const Navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";
  const onSubmit = data => {
     singInAccount(data.email ,data.password)
       .then((data) => {
         if (data.user.uid) {
           reset()
           Navigate(from, { replace: true });
          Swal.fire({
            icon: 'success',
            title: `Successful login your account`,
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
        <Card color="transparent" shadow={false} className=" mt-20 bg-white w-96 mx-auto p-10">
        <Typography variant="h4" color="blue-gray" className="text-center">
          login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
          <div className="mb-4 flex flex-col gap-6">
            <Input {...register("email", {required: true})} size="lg" label="Email" />
                    <Input {...register("password", { required: true })} type="password" size="lg" label="Password" />
          </div>
                <Input type="submit" variant="outlined" color="orange" className="uppercase hover:text-white hover:bg-yellow-900" value={'Registration '} />
          <Typography className="mt-4 text-center font-normal">
             Create a new account <Link to={'/singUp'}><span className="text-orange-600 underline underline-offset-4">Registration</span></Link>
          </Typography>
        </form>
      </Card>
    );
};

export default SingIn;