import {Carousel} from "@material-tailwind/react";
import banner1 from '../../../assets/Banner/Headphone-website-1.jpg'
import banner2 from '../../../assets/Banner/headphone.jpg'
import banner3 from '../../../assets/Banner/phone-banner-2.webp'
import banner4 from '../../../assets/Banner/phone-banner.jpg'
import banner5 from '../../../assets/Banner/watch-banner-4.jpg'
import banner6 from '../../../assets/Banner/watch.gif'
const Banner = () => {
    return (
      <Carousel className="w-full">
        <img
        src={banner6}
        alt="image 1"
        className="md:h-96 h-full w-full object-cover"
        />
        <img
        src={banner5}
        alt="image 3"
        className="md:h-96 h-full w-full object-cover"
        />
      <img
        src={banner1}
        alt="image 2"
        className="md:h-96 h-full w-full object-cover"
      />
      <img
        src={banner2}
        alt="image 3"
        className="md:h-96 h-full w-full object-cover"
      />
      <img
        src={banner3}
        alt="image 4"
        className="md:h-96 h-full w-full object-cover"
        />
         <img
        src={banner4}
        alt="image 5"
        className="md:h-96 h-full w-full object-cover"
        />
    </Carousel>
    );
};

export default Banner;
