
import { Typography } from "@material-tailwind/react";
import UseUserBooking from "../../Hook/UseUserBooking/UseUserBooking";
import UseUserPayment from "../../Hook/UseUserPayment/UseUserPayment";
import UseUserReview from "../../Hook/UseUserReview/UseUserReview";
import UseSectionTittle from "../../Hook/UseSectionTittle/UseSectionTittle";

 

const UserHome = () => {
    const [bookings] = UseUserBooking()
    const [paymentHistory] = UseUserPayment()
    const [userReview] = UseUserReview()
   
    return (
        <>
        <UseSectionTittle HeaderTittle={"---Home---"} subHeaderTittle={'User Home'}></UseSectionTittle>
        <div className="grid grid-cols-3 w-1/2 mx-auto gap-5 mt-10">
            <div className="p-10 bg-gradient-to-r from-orange-400 from-5% via-purple-300 via-70% to-pink-500 to-100% rounded-lg text-white">
                <p className="text-lg">Your Total Booking</p>
                <Typography className="text-center text-xl">{bookings.length}</Typography>
            </div >
            <div className="p-10 bg-gradient-to-r from-yellow-400 from-5% via-pink-300 via-70% to-orange-500 to-100% rounded-lg text-white">
                <p className="text-lg">Your Total Payment</p>
                <Typography className="text-center text-xl">{paymentHistory.length}</Typography>
            </div >
            <div className="p-10 bg-gradient-to-r from-blue-400 from-5% via-purple-200 via-40% to-green-500 to-100% rounded-lg text-white">
                <p>Your Total Review</p>
                <Typography className="text-center">{userReview.length}</Typography>
             </div >
        </div>
        </>
    );
};

export default UserHome;