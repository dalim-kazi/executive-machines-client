import { Outlet, useLocation } from "react-router-dom";
import Header from "../Shared/Navbar/Header";
import Footer from "../Shared/Footer/Footer";
 
 

 

const Main = () => {
    const location = useLocation()
    const isPathname = location.pathname.includes('phone') || location.pathname.includes('watch') || location.pathname.includes('laptop') || location.pathname.includes('headPhone')||location.pathname.includes('reservation') 
    const singUpAndLogIn =location.pathname.includes('singUp')||location.pathname.includes('singIn')
    return (
        <div>
          {singUpAndLogIn ||  <Header></Header>}
            <Outlet></Outlet>
            {isPathname || singUpAndLogIn|| <Footer></Footer>}
        </div>
    );
};

export default Main;