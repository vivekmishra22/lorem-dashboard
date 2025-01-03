import React  from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineForm } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import '../Assets/Css/style.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  // const [ active , setActive ] = useState(1);

  return (
    <>
      <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100'>
        <div className='text-white'>
          <a href="/" className='d-flex justify-content-center align-items-center text-decoration-none text-light'>
            <FaLaptopCode className='fs-3 me-2 text-warning-emphasis' />
            <span className='fs-2'>Admin</span>
          </a>

          <hr className='text-light mt-2' />

          <ul className='nav nav-pills flex-column mt-2 my-1'>
            <li className='nav-item p-2'>
              <span className='d-flex justify-content-center align-items-center text-decoration-none'>
                <RxDashboard className='me-3 fs-5 text-info-emphasis' />
                <span className='fs-5'>Dashboard</span>
              </span>
            </li>
            {/* <li className='nav-item p-2 my-1'>
              <Link to="/register" className='d-flex align-items-center text-decoration-none text-white'>
                <AiOutlineForm className='me-3 fs-5 text-info-emphasis' />
                <span className='fs-5'>Form</span>
              </Link>
            </li> */}
            <li className='nav-item p-2 my-1'>
              <Link to="/register" className='d-flex align-items-center text-decoration-none text-white'>
                <AiOutlineForm className='me-3 fs-5 text-info-emphasis' />
                <span className='fs-5'>Card Form</span>
              </Link>
            </li>
            <li className='nav-item p-2 my-1'>
              <Link to="/view" className='d-flex align-items-center text-decoration-none text-white'>
                {/* <FaUserFriends className='me-3 fs-5' /> */}
                <SlPeople className='me-3 fs-5 text-info-emphasis' />
                <span className='fs-5'>Card Details</span>
              </Link>
            </li>
            {/* <li className='nav-item p-2 my-1'>
              <span className='d-flex align-items-center text-decoration-none'>
                <BsCartCheck className='me-3 fs-5 text-info-emphasis' />
                <span className='fs-5'>Product</span>
              </span>
            </li> */}
          </ul>
        </div>
        <div className='nav-item'>
          <hr className='text-light' />
          <a href="/" className='p-2 d-flex align-items-center text-decoration-none text-danger fs-6'>
            <IoLogOutOutline className='me-3 fs-3' />
            <span className=''><strong>Logout</strong></span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar;