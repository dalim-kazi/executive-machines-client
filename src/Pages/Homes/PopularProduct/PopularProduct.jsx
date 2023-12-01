import UseProduct from "../../../Hook/UseProduct/UseProduct";
import UseSectionTittle from "../../../Hook/UseSectionTittle/UseSectionTittle";
import UseCard from "../../../Hook/UseCard/UseCard";
const PopularProduct = () => {
    const [products] = UseProduct()
    const popularProducts = products.filter(item => item.category === 'popular')
    
    return (
      <>
          <UseSectionTittle HeaderTittle={'---popular---'} subHeaderTittle={'Popular Products'}></UseSectionTittle>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-3 mb-10 m-3 md:mt-10 mt-10 rounded-xl">
            {
                popularProducts?.map(item=><UseCard key={item._id} image={item.image} productName={item.productName} price={item.price} _id={item._id}></UseCard>)
            }
        </div>
        </>
    );
 };
 
 export default PopularProduct;