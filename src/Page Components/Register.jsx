import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("");

  function handleSubmit(e) {
    e.preventDefault()

    const userData = {
      name,
      mobile,
      address,
      product
    }

    axios.post('http://localhost:8000/postuser', userData).then(res => {
      console.log("hi", res.data);
      alert('Data Added Successfully!!');
      setName("");
      setMobile("");
      setAddress("");
      setProduct("");
    })
      .catch(err => {
        console.log(err);
      })

  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className='mx-auto my-5'>
            <div className="border-top border-5 border-primary"></div>
            <Form className='form-control' onSubmit={handleSubmit}>
              <h2 className='text-center'>REGISTRATION FORM</h2>
              <p>Please enter your details to join us!</p>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile." value={mobile} required
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder="Enter Address." value={address} required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Product / Service</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={product} required
                      onChange={(e) => setProduct(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group>
                  <Button className='w-100' type="submit">Submit</Button>
                </Form.Group>
              </Row>
            </Form>
          </Col >
        </Row >
      </Container >
    </>
  )
}

export default Register;
