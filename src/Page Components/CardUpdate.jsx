import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CardUpdate = () => {
  const Navigate = useNavigate();
  const {_id} = useParams(); // Destructure _id from the URL params
  const [ctitle, setCtitle] = useState("");
  const [ctext, setCtext] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      ctitle,
      ctext
    };

    // Fix the URL string interpolation with backticks
    axios.put(`http://localhost:8000/putuser/${_id}`, userData)
      .then(res => {
        console.log("Response:", res.data);
        alert('Data Updated Successfully!!');
        setCtitle("");
        setCtext("");
      })
      .catch(err => {
        console.log(err);
      });

    Navigate("/"); // Navigate to home after the operation
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={8} className='mx-auto my-5'>
            <div className="border-top border-5 border-primary"></div>
            <Form className='form-control' onSubmit={handleSubmit}>
              <h2 className='text-center'>CARD FORM</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Card Title</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter card title" 
                  value={ctitle} 
                  required
                  onChange={(e) => setCtitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Card Text</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Description" 
                  value={ctext} 
                  required
                  onChange={(e) => setCtext(e.target.value)}
                />
              </Form.Group>

              <Button className='w-100' variant="primary" type="submit">
                Submit
              </Button>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardUpdate;
