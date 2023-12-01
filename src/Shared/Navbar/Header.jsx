import { Navbar, MobileNav, Typography, Button, IconButton, Menu, MenuHandler, Avatar, MenuList, MenuItem } from "@material-tailwind/react";
import {UserCircleIcon, ChevronDownIcon,Cog6ToothIcon,InboxArrowDownIcon,PowerIcon} from "@heroicons/react/24/outline";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import profile from '../../assets/cover/profile.png'
import UseAdmin from "../../Hook/UseAdmin/UseAdmin";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin]=UseAdmin()
  const Navigate =useNavigate()
  const handleSingOut = () => {
    logOut()
      .then(() => {
       Navigate('/')
    })
  }
  const closeMenu = () => setIsMenuOpen(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 lg:flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium text-md hover:text-amber-800"
      >
         <Link to='/'>Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium text-md hover:text-amber-800"
      >
        <Link to={'/phone'}>Phone</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium text-md hover:text-amber-800"
      >
        <Link to={'/watch'}>Watch</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium text-md hover:text-amber-800"
      >
        <Link to={'/laptop'}>Laptop</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium text-md hover:text-amber-800"
      >
         <Link to={'/headPhone'}>Headphone</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium text-md hover:text-amber-800"
      >
        {
          user ? <>
          {
             isAdmin ? <><Link to={'/dashboard/adminHome'}>Dashboard</Link></>:<><Link to={'/dashboard/userHome'}>Dashboard</Link></>
          }
          </> : <Link to={'/singIn'}>SingIn</Link>
         }
      </Typography>
    </ul>
  );
  const profileMenuItems = [
    {
      label:<Link>My Profile</Link>,
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
     
    {
      label:<Button onClick={handleSingOut}>Sing Out</Button>,
      icon: PowerIcon,
    },
  ];
    return (
        <>
        <div className="max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-gray-900">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="me-10 cursor-pointer py-1.5 font-bold uppercase italic "
          >
            executive machines
              </Typography>
              <div><div className="mr-4 hidden lg:block">{navList}</div></div>
            <div className="flex items-center gap-4">
                <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                  {
                   user? <MenuHandler>
                   <Button
                     variant="text"
                     color="blue-gray"
                     className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                   >
                     <Avatar
                          variant="circular"
                          size="sm"
                          alt="tania andrew"
                          className="border border-gray-900 p-0.5"
                          src={user?.photoURL}
                     />
                     <ChevronDownIcon
                       strokeWidth={2.5}
                       className={`h-3 w-3 transition-transform ${
                         isMenuOpen ? "rotate-180" : ""
                       }`}
                     />
                   </Button>
                 </MenuHandler>:<><img src={profile} className="w-12" alt="" /></> 
                }
      <MenuList className="p-1">
        {profileMenuItems?.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
            key={label}
            onClick={closeMenu}
            className={`flex items-center gap-2 rounded ${
              isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
            }`}
          >
            {React.createElement(icon, {
              className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
              strokeWidth: 2,
            })}
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color={isLastItem ? "red" : "inherit"}
            >
              {label}
            </Typography>
          </MenuItem>
          );
        })}
       </MenuList>
     </Menu>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
     
    </div>
            
        </>
    );
 };
 
 export default Header;