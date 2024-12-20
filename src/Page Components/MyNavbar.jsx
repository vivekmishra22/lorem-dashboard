import React from 'react';
import { Col, Container, Row, Navbar, Image, Offcanvas, Dropdown } from 'react-bootstrap';
import userLogo from '../Assets/Images/user-icon.webp';
import { FaLaptopCode, FaUserFriends, FaShoppingCart } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineForm } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { FaTable } from "react-icons/fa6";

const MyNavbar = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <div>
                            <Offcanvas className="bg-dark text-light" show={true} backdrop={false} style={{ width: "17.5%" }}>
                                <Offcanvas.Header className='d-flex justify-content-center align-items-center'>
                                <FaLaptopCode className="me-2 fs-2 text-primary" />
                                    <Offcanvas.Title className="fs-3">Admin Dashboard</Offcanvas.Title>
                                </Offcanvas.Header>
                                <hr className="m-0" />
                                <Offcanvas.Body>

                                    <ul className="list-unstyled">
                                        <li className='mb-2 d-flex align-items-center'>
                                            <RxDashboard className="me-2 fs-5 text-info" />
                                            <a className="text-decoration-none text-light" href="#dashboard">Dashboard</a>
                                        </li>
                                        <li className='mb-2 d-flex align-items-center'>
                                            <FaUserFriends className="me-2 fs-5 text-info" />
                                            <a className="text-decoration-none text-light" href="#user">User</a>
                                        </li>
                                        <li className='mb-2 d-flex align-items-center'>
                                        <AiOutlineForm className="me-2 fs-5 text-info" />
                                            <a className="text-decoration-none text-light" href="#form">Form</a>
                                        </li>
                                        <li className='mb-2 d-flex align-items-center'>
                                        <FaTable className="me-2 fs-5 text-info" />
                                            <a className="text-decoration-none text-light" href="#table">Table</a>
                                        </li>
                                        <li className='mb-2 d-flex align-items-center'>
                                            <FaShoppingCart className="me-2 fs-5 text-info" />
                                            <a className="text-decoration-none text-light" href="#product">Product</a>
                                        </li>
                                        <li className='mb-2 d-flex align-items-center mt-5'>
                                            <IoLogOut className="me-2 fs-5 text-danger" />
                                            <a className="text-decoration-none text-light" href="#logout">Logout</a>
                                        </li>
                                    </ul>

                                </Offcanvas.Body>

                            </Offcanvas>
                        </div>
                    </Col>

                    <Col md={10}>
                        <Navbar bg="dark" variant="dark" expand="lg">
                            <Container className="p-2">
                                {/* Navbar Brand */}
                                <Navbar.Brand href="#home">MyNavbar</Navbar.Brand>



                            </Container>
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
                            {/* <a href="">anchor</a> */}
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyNavbar;
