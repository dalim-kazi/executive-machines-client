import UseCard from "../../../Hook/UseCard/UseCard";
import UseCover from "../../../Hook/UseCover/UseCover";
import UseProduct from "../../../Hook/UseProduct/UseProduct";
import UseSectionTittle from "../../../Hook/UseSectionTittle/UseSectionTittle";
import headphoneCover from '../../../assets/cover/headphoneCover.webp'
const Headphone = () => {
    const [products] = UseProduct()
    const WatchCategory = products.filter(item => item.category === 'Headphone')
    return (
        <div>
            <UseCover img={headphoneCover}></UseCover>
            <UseSectionTittle HeaderTittle={'---Headphone---'} subHeaderTittle={'headphone category'}></UseSectionTittle>
            <div className="grid md:grid-cols-6 grid-cols-2 gap-3 mb-10 m-3 md:mt-10 mt-10 rounded-xl">
                {
                    WatchCategory?.map(item=><UseCard key={item._id} image={item.image} productName={item.productName} price={item.price} _id={item._id}></UseCard>)
                }
            </div>
        </div>
    );
};

export default Headphone;