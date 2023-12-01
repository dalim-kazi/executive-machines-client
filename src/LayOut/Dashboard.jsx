import {Drawer, Typography,IconButton,List,ListItem} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { FaBars, FaBook, FaHome, FaUsers} from 'react-icons/fa'; 
import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../Hook/UseAdmin/UseAdmin";

const Dashboard = () => {
    const [open, setOpen] =useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [isAdmin]=UseAdmin()
   
    return (
        <Fragment>
       <FaBars onClick={openDrawer} className="text-2xl"></FaBars>
        <Drawer open={open} onClose={closeDrawer}>
          <div className="mb-2 flex items-center justify-between p-4">
            <Typography variant="h5" color="blue-gray" className="uppercase ">
            executive machines
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List>
            {
              isAdmin ?  <List>
              <ListItem><FaHome className="mx-2"></FaHome> <Link to={'/dashboard/adminHome'}>Admin Home</Link></ListItem> 
              <ListItem><FaUsers className="mx-2"></FaUsers><Link to={'/dashboard/manageUser'}>Manage User</Link></ListItem>
                <ListItem><FaBook className="mx-2"></FaBook><Link to={'/dashboard/manageBooking'}>Manage Booking</Link></ListItem>
                <ListItem><FaBook className="mx-2"></FaBook><Link to={'/dashboard/adminPaymentHistory'}>Manage Payment</Link></ListItem>
              </List> : <List>
                <ListItem><FaHome className="mx-2"></FaHome><Link to={'/dashboard/userHome'}>User Home</Link></ListItem> 
                <ListItem><FaBook className="mx-2"></FaBook><Link to={'/dashboard/userBooking'}>My Booking</Link></ListItem> 
                  <ListItem><FaBook className="mx-2"></FaBook><Link to={'/dashboard/addReview'}>Add Review</Link></ListItem> 
                  <ListItem><FaBook className="mx-2"></FaBook><Link to={'/dashboard/paymentHistory'}>Payment History</Link></ListItem> 
            </List>
            }
            <hr></hr>
            <ListItem><FaHome className="mx-2"></FaHome><Link to={'/'}>Home</Link></ListItem>
             
          </List>
        </Drawer>
        <Outlet></Outlet>
      </Fragment>
    );
};

export default Dashboard;