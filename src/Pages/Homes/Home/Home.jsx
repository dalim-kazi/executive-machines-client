import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularProduct from "../PopularProduct/PopularProduct";
import Review from "../Review/Review";
 

 
const Home = () => {
    return (
        <div className="mt-10">
            <Banner></Banner>
            <Category></Category>
            <PopularProduct></PopularProduct>
            <Review></Review>
        </div>
    );
};

export default Home;