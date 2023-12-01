import { Avatar, Typography } from "@material-tailwind/react";
import UseUserPayment from "../../Hook/UseUserPayment/UseUserPayment";
import UseSectionTittle from "../../Hook/UseSectionTittle/UseSectionTittle";

 
const TABLE_HEAD = ["#","Photo", "Product Details", "User Details","Payment"];
const PaymentHistory = () => {
  const [paymentHistory]=UseUserPayment()  

    return (
      <>
      
      <UseSectionTittle HeaderTittle={'--Payment---'} subHeaderTittle={'PAYMENT HISTORY'}></UseSectionTittle>
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
          {paymentHistory?.map(
            ({_id,name,mobile_number,image,price,productName}, index) => {
              const isLast = index ===paymentHistory?.length - 1;
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
                          <Typography variant="small">{productName.slice(0,50)}...</Typography>
                           
                          <Typography color="orange">৳{price}</Typography>
                           
                      </td>
                      
                  <td className={classes}>
                    <div>
                       
                          <Typography variant="small">{name}</Typography>
                          <Typography variant="small">{mobile_number}</Typography>
                    </div>
                      </td>
                      <td><p className="text-orange-600"> Complete</p></td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
      </>
    );
};

export default PaymentHistory;