import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const SliderForm = () => {

  const [sliderHeading, setSliderHeading] = useState("");
  const [sliderDescription, setSliderDescription] = useState("");

  // function handleSubjectChange(e) {
  //   const value = e.target.value;
  //   if (e.target.checked) {
  //     setSubject([...subject, value]);
  //   } else {
  //     setSubject(subject.filter((item) => item !== value));
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault()

    // const newData = new FormData()
    // newData.append('fname', fname)
    // newData.append('email', email)
    // newData.append('password', password)
    // newData.append('mobile', mobile)
    // newData.append('address', address)

    const userData = {
      sliderHeading,
      sliderDescription
      // password,
      // mobile,
      // address,
      // city,
      // gender,
      // subject
    }

    axios.post('http://localhost:8000/postslider', userData).then(res => {
      console.log("hi", res.data);
      alert('Data Added Successfully!!');
      setSliderHeading("");
      setSliderDescription("");
      // setPassword("");
      // setMobile("");
      // setAddress("");
      // setCity("");
      // setGender("");
      // setSubject([]);
    })
      .catch(err => {
        console.log(err);
      })

  }


  return (
    <>

      <Container>
         {/* <Row>
                  <Col md={8} className='mx-auto my-5'>
                    <div className="border-top border-5 border-primary"></div>
                    <Form className='form-control' onSubmit={handleSubmit}>
                      <h2 className='text-center'>CARD FORM</h2>
        
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Card Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter card title" 
                        value={sliderHeading} required
                        onChange={(e) => setSliderHeading(e.target.value)}
                        />
                      </Form.Group>
        
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Card Text</Form.Label>
                        <Form.Control type="text" placeholder="Description" 
                        value={sliderDescription} required
                        onChange={(e) => setSliderDescription(e.target.value)}
                        />
                      </Form.Group>
        
                      <Button className='w-100' variant="primary" type="submit">
                        Submit
                      </Button>
        
                      </Form>
                  </Col >
                </Row > */}
        <Row>
          <Col md={8} className='mx-auto my-5'>
            <div className="border-top border-5 border-primary"></div>
            <Form className='form-control' onSubmit={handleSubmit}>
              <h2 className='text-center'>SLIDER FORM</h2>
              <Form.Group className="mb-3" controlId="formBasicsHeading">
                <Form.Label>Slider Header</Form.Label>
                <Form.Control type="text" placeholder="Enter slider header"value={sliderHeading} required
                  onChange={(e) => setSliderHeading(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Slider Description</Form.Label>
                <Form.Control type="text" placeholder="Enter slider description" value={sliderDescription} required
                  onChange={(e) => setSliderDescription(e.target.value)} />
              </Form.Group>
              <Button className='w-100' variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            
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
