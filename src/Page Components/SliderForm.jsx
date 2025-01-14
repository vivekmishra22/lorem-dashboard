import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const SliderForm = () => {
  return (
    <>
      
      <Container>
        <Row>
        <Col md={8} className='mx-auto my-5'>
            <div className="border-top border-5 border-primary"></div>
            <form action="">
            <h2 className='text-center'>SLIDER FORM</h2>
            
            </form>
            {/* <Form className='form-control'>
              <h2 className='text-center'>CARD FORM</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Card Title</Form.Label>
                <Form.Control type="text" placeholder="Enter card title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Card Text</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>

              <Button className='w-100' variant="primary" type="submit">
                Submit
              </Button>
            </Form> */}
          </Col >
          {/* <Col md={6}>
          <div className="border-top border-5 border-primary"></div>
          </Col> */}
        </Row >
      </Container >

    </>
  )
}

export default SliderForm;
