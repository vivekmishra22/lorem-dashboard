import React from 'react';
import { Col, Container, Row, Navbar, Nav, Image, Form } from 'react-bootstrap';
import userLogo from '../Assets/Images/user-icon.webp';

const MyNavbar = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={3}></Col>

                    <Col md={9}>
                        <Navbar bg="primary" variant="dark" expand="lg">
                            <Container>
                                {/* Navbar Brand */}
                                <Navbar.Brand href="#home">MyNavbar</Navbar.Brand>

                                {/* Toggle Button */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                                {/* Collapsible Navigation Links */}
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="m-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#about">About</Nav.Link>
                                        <Nav.Link href="#contact">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Image
                                        src={userLogo}
                                        roundedCircle
                                        width="40"
                                        height="40"
                                        className="ms-auto d-inline-block align-middle"
                                        alt="User Logo"
                                    />
                                    <Form.Select className='bg-transparent border-0' aria-label="Default select example">
                                        <option>user@gmail.com</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    {/* <Image src={userLogo} rounded /> */}
                                </div>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyNavbar;
