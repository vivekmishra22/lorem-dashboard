import React from 'react';
// import { FiSearch } from "react-icons/fi";
import { NavDropdown } from 'react-bootstrap';
import { BsPersonCircle } from "react-icons/bs";
// import userLogo from '../Assets/Images/user-icon.webp';

const MainNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Dashboard</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                            {/* <Image
                                src={userLogo}
                                roundedCircle
                                width="40"
                                height="40"
                                className="d-inline-block align-middle border border-info p-1"
                                alt="User Logo"
                            /> */}
                            <BsPersonCircle className='text-info fs-4' />
                            <NavDropdown className="bg-transparent border-0" title="user@gmail.com" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item> */}
                            </NavDropdown>
                            {/* <Dropdown className='d-flex justify-content-center align-items-center'>
                                <Dropdown.Toggle className="bg-transparent border-0" variant="success" id="dropdown-basic">
                                    user@gmail.com
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                            {/* <li className="nav-item border rounded d-flex justify-content-center align-items-center">
                                <a className="nav-link active" aria-current="page" href="#">
                                <FiSearch classNameName='me-2' />
                                    Search
                                </a>
                            </li>
                            <li className="nav-item mx-1 border rounded">
                                <a className="nav-link active" aria-current="page" href="#">Account</a>
                            </li>
                            <li className="nav-item border rounded">
                                <a className="nav-link active" aria-current="page" href="#">Logout</a>
                            </li> */}
                            {/* <div className='d-flex justify-content-center align-items-center'>
                                <Image
                                    src={userLogo}
                                    roundedCircle
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-middle border border-info p-1"
                                    alt="User Logo"
                                />

                                <Dropdown>
                                    <Dropdown.Toggle className="bg-transparent border-0" variant="success" id="dropdown-basic">
                                        user@gmail.com
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainNavbar;