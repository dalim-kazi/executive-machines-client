import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Homes/Home/Home";
import Phone from "../Pages/CatagoryPages/Phones/Phone";
import Watch from "../Pages/CatagoryPages/Watch/Watch";
import Laptop from "../Pages/CatagoryPages/Laptop/Laptop";
import Headphone from "../Pages/CatagoryPages/Headphone/Headphone";
import SingUp from "../Pages/SingUp/SingUp";
import SingIn from "../Pages/SingIn/SingIn";
import Dashboard from "../LayOut/Dashboard";
import ManageUser from "../Dashboard/ManageUser/ManageUser";
import PrivateRouter from "./PrivateRouter";
import Reservation from "../Dashboard/Reservation/Reservation";
import UserBooking from "../Dashboard/UserBooking/UserBooking";
import ManageBooking from "../Dashboard/ManageBooking/ManageBooking";
import AdminRouter from "./AdminRouter";
import AddReview from "../Dashboard/AddReview/AddReview";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Dashboard/UserHome/UserHome";
import AllPaymentHistory from "../Dashboard/AllPaymentHistory/AllPaymentHistory";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
 
 
export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/phone",
                element:<Phone></Phone>
            },
            {
                path: "/watch",
                element:<Watch></Watch>
            },
            {
                path: "/laptop",
                element:<Laptop></Laptop>
            },
            {
                path: "/headPhone",
                element:<Headphone></Headphone>
            },
            {
                path: 'singUp',
                element:<SingUp></SingUp>
            },
            {
                path: "/singIn",
                element:<SingIn></SingIn>
            },
            {
                path: "/reservation/:id",
                element: <PrivateRouter><Reservation></Reservation></PrivateRouter>,
                loader:({params})=>fetch(`https://executive-machines-server.vercel.app/reservation/${params.id}`)
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: "userBooking",
                element:<UserBooking></UserBooking>
            },
            {
                path: "addReview",
                element:<AddReview></AddReview>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>,
                loader:({params})=>fetch(`https://executive-machines-server.vercel.app/booking/${params.id}`)
            },
            {
                path: "paymentHistory",
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path: "userHome",
                element:<UserHome></UserHome>
            },
            // admin
            {
                path: "adminHome",
                element:<AdminRouter><AdminHome></AdminHome></AdminRouter>

            },
            {
                path: "manageUser",
                element:<AdminRouter><ManageUser></ManageUser></AdminRouter>
            },
            {
                path: "manageBooking",
                element:<AdminRouter><ManageBooking></ManageBooking></AdminRouter>
            },
            {
                path: "adminPaymentHistory",
                element:<AdminRouter><AllPaymentHistory></AllPaymentHistory></AdminRouter>
            }
        ]
    }
])
