import React from 'react';
import userLogo from '../Assets/Images/user-icon.webp';
import { Image, Dropdown } from 'react-bootstrap';
// import { FiSearch } from "react-icons/fi";

const MainNavbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <div className='d-flex justify-content-center align-items-center'>
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
                                {/* <Form.Select className='bg-transparent text-primary border-0' aria-label="Default select example">
                                        <option>user@gmail.com</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select> */}
                                {/* <Image src={userLogo} rounded /> */}
                            </div>
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
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainNavbar;
