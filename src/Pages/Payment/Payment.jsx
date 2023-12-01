
import { Elements } from "@stripe/react-stripe-js";
import CheekOut from "./CheekOut";
import { loadStripe } from "@stripe/stripe-js";
import UseSectionTittle from "../../Hook/UseSectionTittle/UseSectionTittle";
 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <>
        <UseSectionTittle HeaderTittle={'---Payment---'} subHeaderTittle={'User Payment'}></UseSectionTittle>
        <div className="w-96 mx-auto bg-white mt-10 p-10 rounded-lg">
            <Elements stripe={stripePromise}>
            <CheekOut></CheekOut>
            </Elements>
            
        </div>
        </>
    );
};

export default Payment;