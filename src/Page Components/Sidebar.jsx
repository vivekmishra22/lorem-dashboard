import React  from 'react';
import { FaLaptopCode, FaUserFriends, FaShoppingCart } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineForm } from "react-icons/ai";
// import { BsPersonCircle } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import '../Assets/Css/style.css';

const Sidebar = () => {

  // const [ active , setActive ] = useState(1);

  return (
    <>
      <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100'>
        <div className='text-white'>
          <a href="/" className='d-flex justify-content-center align-items-center text-decoration-none text-light'>
            <FaLaptopCode className='fs-3 me-2' />
            <span className='fs-2'>Admin</span>
          </a>

          <hr className='text-light mt-2' />

          <ul className='nav nav-pills flex-column mt-2 my-1'>
            <li className='nav-item p-2'>
              <span className='d-flex justify-content-center align-items-center text-decoration-none'>
                <RxDashboard className='me-3 fs-5' />
                <span className='fs-5'>Dashboard</span>
              </span>
            </li>
            <li className='nav-item p-2 my-1'>
              <span className='d-flex align-items-center text-decoration-none'>
                <FaUserFriends className='me-3 fs-5' />
                <span className='fs-5'>Users</span>
              </span>
            </li>
            <li className='nav-item p-2 my-1'>
              <span className='d-flex align-items-center text-decoration-none'>
                <AiOutlineForm className='me-3 fs-5' />
                <span className='fs-5'>Form</span>
              </span>
            </li>
            <li className='nav-item p-2 my-1'>
              <span className='d-flex align-items-center text-decoration-none'>
                <FaShoppingCart className='me-3 fs-5' />
                <span className='fs-5'>Table</span>
              </span>
            </li>
          </ul>
        </div>
        <div className='nav-item'>
          <hr className='text-light' />
          <a href="/" className='p-2 d-flex align-items-center text-decoration-none text-light'>
            <IoLogOut className='me-3 fs-5' />
            {/* <BsPersonCircle className='me-3 fs-5' /> */}
            <span className='fs-5'><strong>Logout</strong></span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar;




// import React from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import SidebarHeader from '../Assets/Images/Sidebar-header.png'

// const Sidebar = () => {
//   return (
//     <>
//       <Container fluid>
//         <Row>
//             <Col md={3} className='position-sticky bg-dark text-light' vh-100>
//                 <Image className='image-thumbnail w-100 h-25' src={SidebarHeader} />
//                 <div>
//                 <h2 className='text-center'>Admin</h2>
//                 <hr />

//                 <ul>
//                     <li><a href="#">Home</a></li>
//                     <li><a href="#">Profile</a></li>
//                     <li><a href="#">Form</a></li>
//                     <li><a href="#">Table</a></li>
//                 </ul>
//                 </div>
//             </Col>
//             <Col md={9}>
//             <h1>Header</h1>
//             </Col>
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default Sidebar;




// import React from 'react';
// import { Container, Row, Col, Card, Navbar, Nav, Button } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
// // import Button from 'react-bootstrap/Button';

// const Sidebar = () => {
//     return (
//         <>
//             <div className="Dashboard">
//                 {/* Navbar */}
//                 <Navbar bg="dark" variant="dark" expand="lg">
//                     <Container>
//                         <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Nav className="me-auto">
//                                 <Nav.Link href="#home">Home</Nav.Link>
//                                 <Nav.Link href="#features">Features</Nav.Link>
//                                 <Nav.Link href="#pricing">Pricing</Nav.Link>
//                             </Nav>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>

//                 {/* Main Content */}
//                 <Container fluid style={{ marginTop: '20px' }}>
//                     <Row>
//                         {/* Sidebar */}
//                         <Col md={3} style={{ backgroundColor: '#f8f9fa', height: '100vh', padding: '20px' }}>
//                             <h5>Sidebar</h5>
//                             <Nav className="flex-column">
//                                 <Nav.Link href="#overview">Overview</Nav.Link>
//                                 <Nav.Link href="#reports">Reports</Nav.Link>
//                                 <Nav.Link href="#analytics">Analytics</Nav.Link>
//                                 <Nav.Link href="#settings">Settings</Nav.Link>
//                             </Nav>
//                         </Col>

//                         {/* Main Dashboard Area */}
//                         <Col md={9}>
//                             <Row>
//                                 <Col md={4}>
//                                     <Card>
//                                         <Card.Body>
//                                             <Card.Title>Card Title 1</Card.Title>
//                                             <Card.Text>
//                                                 Some quick example text to build on the card title and make up the bulk of the card's content.
//                                             </Card.Text>
//                                             <Button variant="primary">Go somewhere</Button>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Card>
//                                         <Card.Body>
//                                             <Card.Title>Card Title 2</Card.Title>
//                                             <Card.Text>
//                                                 Some quick example text to build on the card title and make up the bulk of the card's content.
//                                             </Card.Text>
//                                             <Button variant="primary">Go somewhere</Button>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Card>
//                                         <Card.Body>
//                                             <Card.Title>Card Title 3</Card.Title>
//                                             <Card.Text>
//                                                 Some quick example text to build on the card title and make up the bulk of the card's content.
//                                             </Card.Text>
//                                             <Button variant="primary">Go somewhere</Button>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             </Row>

//                             <Row style={{ marginTop: '20px' }}>
//                                 <Col md={12}>
//                                     <Card>
//                                         <Card.Body>
//                                             <Card.Title>Detailed Report</Card.Title>
//                                             <Card.Text>
//                                                 This section can be used for detailed charts, graphs, or reports.
//                                             </Card.Text>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </>
//     )
// }

// export default Sidebar;
