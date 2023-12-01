import { useQuery } from "react-query";
import UseAxiosInterceptor from "../../Hook/axiosInterceptor/UseAxiosInterceptor";
import { Typography } from "@material-tailwind/react";
import UseSectionTittle from "../../Hook/UseSectionTittle/UseSectionTittle";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie} from 'recharts';
import UseAllPayment from "../../Hook/UseAllPayment/UseAllPayment";

const AdminHome = () => {
    const [AxiosInterceptor] = UseAxiosInterceptor()
    const [allPayment] = UseAllPayment()
    const { data: allDetails={}} = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await AxiosInterceptor.get('/admin-state')
            return res.data 
        }
    })
    
    const phone = allPayment?.filter(product => product.category === 'phone')
    const phonePrice =phone?.reduce((sum,currentValue)=>currentValue.price + sum,0)
    const headphone = allPayment?.filter(product => product.category === 'Headphone')
    const headphonePrice =headphone?.reduce((sum,currentValue)=>currentValue.price + sum,0)
    const laptop = allPayment?.filter(product => product.category === 'laptop')
    const laptopPrice =laptop?.reduce((sum,currentValue)=>currentValue.price + sum,0)
    const watch = allPayment?.filter(product => product.category === 'watch')
    const watchPrice =watch?.reduce((sum,currentValue)=>currentValue.price + sum,0)
    const popular = allPayment?.filter(product => product.category === 'popular') 
    const popularPrice = popular?.reduce((sum, currentValue) => currentValue.price + sum, 0)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const Data = [
        {
            category:'phone',
            count: phone.length,
            totalPrice:phonePrice
        },
        {
            category:'Headphone',
            count: headphone.length,
            totalPrice:headphonePrice
        },
        {
            category:'laptop',
            count: laptop.length,
            totalPrice:laptopPrice
        },
        {
            category:'watch',
            count: watch.length,
            totalPrice:watchPrice
        },
        {
            category:'popular',
            count: popular.length,
            totalPrice:popularPrice
         },
    ]
    console.log(Data)

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
    };
    return (
        <>
            <UseSectionTittle HeaderTittle={"---admin---"} subHeaderTittle={'ADMIN HOME'}></UseSectionTittle>
        <div className="grid grid-cols-5 gap-5 w-8/12 mx-auto">
                <div className="p-10 bg-gradient-to-r from-purple-400 from-5% via-purple-300 via-15% to-blue-500 to-100% rounded-lg text-white">
                    <Typography>Total Products</Typography>
                    <Typography variant="h5" className="text-center">{allDetails?.totalProduct}</Typography>
                </div> 
                <div className="p-10 bg-gradient-to-r from-green-400 from-5% via-purple-300 via-70% to-pink-400 to-100% rounded-lg text-white">
                    <Typography variant="h6">Total User</Typography>
                    <Typography variant="h5" className="text-center">{allDetails?.user}</Typography>
                </div>
                <div className="p-10 bg-gradient-to-r from-orange-400 from-5% via-purple-300 via-70% to-pink-500 to-100% rounded-lg text-white">
                    <Typography variant="h6">Total Booking</Typography>
                    <Typography variant="h5" className="text-center">{allDetails?.booking}</Typography>
                </div>
                <div className="p-10 bg-gradient-to-r from-red-400 from-5% via-purple-300 via-70% to-pink-500 to-100% rounded-lg text-white">
                    <Typography className="">Total Payment</Typography>
                    <Typography variant="h5" className="text-center">৳ {allDetails?.totalPayment}</Typography>
                </div>
                <div className="p-10 bg-gradient-to-r from-blue-400 from-5% via-purple-300 via-70% to-pink-500 to-100% rounded-lg text-white">
                    <Typography variant="h6">Total Review</Typography>
                    <Typography variant="h5" className="text-center">{allDetails?.totalReview}</Typography>
                </div>
        </div>
        
            <div className="grid grid-cols-2 w-8/12 mx-auto mt-20">  
            <div>
            <BarChart
      width={500}
      height={300}
      data={Data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="totalPrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {Data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
        </BarChart>    
                </div>
                <div>
        <PieChart width={500} height={400}>
          <Pie
            data={Data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            {Data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      
          </div>
          <div>
            
          </div>
          </div>
        </>
    );
};

export default AdminHome;