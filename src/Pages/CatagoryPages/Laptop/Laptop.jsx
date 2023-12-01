import UseCard from "../../../Hook/UseCard/UseCard";
import UseCover from "../../../Hook/UseCover/UseCover";
import UseProduct from "../../../Hook/UseProduct/UseProduct";
import UseSectionTittle from "../../../Hook/UseSectionTittle/UseSectionTittle";
import laptopCover from '../../../assets/cover/laptopCover.jpg'
 
const Laptop = () => {
    const [products] = UseProduct()
    const laptopCategory = products.filter(item => item.category === 'laptop')
    
    return (
        <div>
            <UseCover img={laptopCover}></UseCover>
            <UseSectionTittle HeaderTittle={'---Watch---'} subHeaderTittle={'Watch category'}></UseSectionTittle>
            <div className="grid md:grid-cols-6 grid-cols-2 gap-3 mb-10 m-3 md:mt-10 mt-10 rounded-xl">
                {
                     laptopCategory?.map(item=><UseCard key={item._id} image={item.image} productName={item.productName} price={item.price} _id={item._id}></UseCard>)
                }
            </div>
        </div>
    );
};

export default Laptop;