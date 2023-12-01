import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';

import { useQuery } from 'react-query';
import axios from 'axios';
import { Avatar, Rating } from '@material-tailwind/react';
import UseSectionTittle from '../../../Hook/UseSectionTittle/UseSectionTittle';
const Review = () => {
    const { data: reviews=[] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axios.get('https://executive-machines-server.vercel.app/review')
            return res.data
        }
    })
    return (
        <>
      <UseSectionTittle HeaderTittle={"---Reviews"} subHeaderTittle={'Products Reviews'}></UseSectionTittle>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper bg-white m-10"
        >
          {
            reviews?.map(review => <SwiperSlide key={review._id}>
              <div className='flex flex-col text-center m-20 gap-4'>
                <Avatar
               size="lg"
               alt="avatar"
               src={review.photo}
               className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30 mx-auto"
                />
                <p className='font-bold text-lg text-orange-500'>{review.name}</p>
              <p>{review.comment}</p>
              <Rating className='mx-auto' value={review.ratting} readonly />
              </div>
            </SwiperSlide>)
          }
      </Swiper> 
      </>
    );
};

export default Review;