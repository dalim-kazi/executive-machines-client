import {Card,Input,Checkbox,Typography,} from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const SingUp = () => {
    const { register, handleSubmit,reset } = useForm();
    const {createNewAccount,updateUserProfile}=useContext(AuthContext)
  const apiKey = import.meta.env.VITE_imgbb_key
  const location = useLocation()
  const Navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        const image = data.file[0]
        const fromImage = new FormData()
        fromImage.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
        fetch(url, {
            method: "POST",
            body:fromImage
        })
            .then(res => res.json())
            .then(imgData => {
              const imgURL = imgData.data.url
              console.log(imgURL)
                createNewAccount(data.email, data.password)
                    .then(() => {
                        updateUserProfile(data.name, imgURL)
                          .then(() => {
                              const userInfo ={displayName:data.name ,email:data.email, photoURL:imgURL}
                              axios.post('https://executive-machines-server.vercel.app/users', userInfo)
                                .then((data) => {
                                  if (data.data.insertedId) {
                                    reset()
                                    Navigate(from, { replace: true });
                                    Swal.fire({
                                      icon: 'success',
                                      title: `successful create your account`,
                                      showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                      },
                                      hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                      }
                                    })
                                 }
                             })
                        })
                })
            })
    };
    return (
        <Card color="transparent" shadow={false} className=" mt-20 bg-white w-96 mx-auto p-10">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Registration
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
          <div className="mb-4 flex flex-col gap-6">
            <Input {...register("name", {required: true})} size="lg" label="Name" />
            <Input {...register("email", {required: true})} size="lg" label="Email" />
            <Input {...register("password", { required: true ,minLength:8})} type="password" size="lg" label="Password" />
            <Input type="file"  {...register("file", { required: true })} size="lg" />       
          </div>
                <Checkbox
                    {...register("term", {required: true})}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
                <Input type="submit" variant="outlined" color="orange" className="uppercase hover:text-white hover:bg-yellow-900" value={'Registration '} />
                <Typography className="mt-4 text-center font-normal">
            Already have an account <Link to={'/singIn'}><span className="text-orange-600 underline underline-offset-4">Login</span></Link>
          </Typography>
        </form>
      </Card>
    );
};

export default SingUp;