import { Card,CardHeader, CardBody,Typography, } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const UseCard = ({image,productName,price,_id}) => {
    return (
       
       <Card  className="hover:shadow-2xl mt-10" shadow={false}>
        <Link to={`/reservation/${_id}`}>
        
        <CardHeader floated={false}
                 shadow={false}
                 color="transparent"
                 className="m-0 rounded-b-none rounded-t-2xl">
                  <img
                    src={image}
                    alt="card-image"
                    className="w-full h-full hover:scale-125 transition-all duration-500 cursor-pointer"
          />
           
                </CardHeader>
                <CardBody>
                <div className="flex  justify-between bottom-auto">
                <Typography>
                    {productName.slice(0, 28) }.....
               </Typography>
               <Typography className="font-bold text-orange-700 bottom-auto">
               ৳{price}
              </Typography>
                </div>
                </CardBody>
        </Link>
                
              </Card>
     
    );
};

export default UseCard;