 
import UseSectionTittle from '../../../Hook/UseSectionTittle/UseSectionTittle';
import category1 from '../../../assets/category/box.jpg'
import category2 from '../../../assets/category/headphone-1.webp'
import category3 from '../../../assets/category/headphone.webp'
import category4 from '../../../assets/category/laptap.jpg'
import category5 from '../../../assets/category/phone.jpg'
import category6 from '../../../assets/category/watch1.webp'
 

const Category = () => {
     
    return (
      <>
        <UseSectionTittle HeaderTittle={'---Category---'} subHeaderTittle={'Product Category'}></UseSectionTittle>
        <div className='grid md:grid-cols-6 grid-cols-3 gap-2 m-5 mt-10'>
          <div>
            <img src={category1} className='w-full rounded-xl ' alt="" />
          </div>
          <div>
            <img src={category2} className='w-full rounded-xl' alt="" />
          </div>
          <div>
            <img src={category3} className='w-full rounded-xl' alt="" />
          </div>
          <div>
            <img src={category4} className='w-full rounded-xl' alt="" />
          </div>
          <div>
            <img src={category5} className='w-full rounded-xl' alt="" />
          </div>
          <div>
            <img src={category6} className='w-full rounded-xl' alt="" />
          </div>
       </div>
      </>
    );
};

export default Category;