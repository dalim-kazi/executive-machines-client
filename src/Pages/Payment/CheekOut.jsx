import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosInterceptor from "../../Hook/axiosInterceptor/UseAxiosInterceptor";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

 
 
const CheekOut = () => {
    const stripe = useStripe();
  const elements = useElements();
  const Navigate=useNavigate()
  const [AxiosInterceptor] = UseAxiosInterceptor()
  const {user}=useContext(AuthContext)
  const {price,_id,Mobile_number,category,image,productName} = useLoaderData()
  const [massage, setMassage] = useState('')
  const [ClientSecret,setClientSecret]=useState('')
  const [loading,setLoading]=useState(false)
   
  useEffect(() => {
    AxiosInterceptor.post('/create-payment-intent',{price})
      .then(res => {
      setClientSecret(res.data.clientSecret)
    })
    },[])

  
    const handleSubmit =async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setMassage(error.code)
            
        }
        else {
          console.log(paymentMethod)
          setMassage('')
        }

       setLoading(true)
        stripe.confirmCardPayment(ClientSecret, {
          payment_method: {
          card: card,
           billing_details: {
               email: user?.email || 'unknown',
               name:user?.displayName || 'anonymous'
           },
           },
        })
          .then(res => {
            setLoading(false)
            if (res.paymentIntent.status === 'succeeded') {
              console.log(res)
              AxiosInterceptor.patch(`/booking/${_id}`)
              const paymentDetails = {
                name: user?.displayName,
                email:user?.email,
                mobile_number: Mobile_number,
                price: price,
                image: image,
                category: category,
                productName:productName,
                transactionId: res.paymentIntent.id,
                itemId:_id
              }
              AxiosInterceptor.post('/payment', paymentDetails)
                .then(res => {
                  if (res.data.insertedId) {
                    Navigate('/dashboard/userBooking')
                    Swal.fire({
                      icon:"success",
                      title: 'Successful your payment',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })
                }
              })
           }
          })
    }
    return (
        <>
         <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
                />
                <Button type="submit" size="sm" className="mt-10" disabled={!stripe || !ClientSecret || loading}>pay</Button>
                <div className="text-red-600 mt-5">{massage}</div>
    </form>
        </>
    );
 };
 
 export default CheekOut;