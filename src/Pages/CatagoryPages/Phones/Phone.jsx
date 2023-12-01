import UseCard from "../../../Hook/UseCard/UseCard";
import UseCover from "../../../Hook/UseCover/UseCover";
import UseProduct from "../../../Hook/UseProduct/UseProduct";
import UseSectionTittle from "../../../Hook/UseSectionTittle/UseSectionTittle";
import phoneCover from '../../../assets/cover/phoneCover.png'
 

const Phone = () => {
    const [products] = UseProduct()
    const phoneCategory =products.filter(item=>item.category === 'phone')
    return (
        <div>
            <UseCover img={phoneCover}></UseCover>
            <UseSectionTittle HeaderTittle={'---phone---'} subHeaderTittle={'Phone category'}></UseSectionTittle>
            <div className="grid md:grid-cols-6 grid-cols-2 gap-3 mb-10 m-3 md:mt-10 mt-10 rounded-xl">
                {
                    phoneCategory?.map(item=><UseCard key={item._id} image={item.image} productName={item.productName} price={item.price} _id={item._id}></UseCard>)
                }
            </div>
        </div>
    );
};

export default Phone;