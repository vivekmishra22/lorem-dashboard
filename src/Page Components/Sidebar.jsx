import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import SidebarHeader from '../Assets/Images/Sidebar-header.png'

const Sidebar = () => {
  return (
    <>
      <Container fluid>
        <Row>
            <Col md={3} className='position-sticky'>
                <Image className='image-thumbnail w-100 h-25' src={SidebarHeader} />
                <hr />

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Form</a></li>
                    <li><a href="#">Table</a></li>
                </ul>
            </Col>
            <Col md={9}>
            <h1>Header</h1>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Sidebar;




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
