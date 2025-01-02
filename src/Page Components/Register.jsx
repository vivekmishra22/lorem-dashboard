import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {

  const [ctitle, setCtitle] = useState("");
  const [ctext, setCtext] = useState("");
  // const [password, setPassword] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [gender, setGender] = useState("");
  // const [subject, setSubject] = useState([]);


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
      ctitle,
      ctext,
      // password,
      // mobile,
      // address,
      // city,
      // gender,
      // subject
    }

    axios.post('http://localhost:8000/postuser', userData).then(res => {
      console.log("hi", res.data);
      alert('Data Added Successfully!!');
      setCtitle("");
      setCtext("");
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
        <Row>
          <Col md={8} className='mx-auto my-5'>
            <div className="border-top border-5 border-primary"></div>
            <Form className='form-control' onSubmit={handleSubmit}>
              <h2 className='text-center'>REGISTRATION FORM</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Card Title</Form.Label>
                <Form.Control type="text" placeholder="Enter card title" 
                value={ctitle} required
                onChange={(e) => setCtitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Card Text</Form.Label>
                <Form.Control type="text" placeholder="Description" 
                value={ctext} required
                onChange={(e) => setCtext(e.target.value)}
                />
              </Form.Group>

              <Button className='w-100' variant="primary" type="submit">
                Submit
              </Button>

              {/* <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={fname} required
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={password} required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile." value={mobile} required
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={1} placeholder="Enter Address." value={address} required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Select aria-label="select" name='city'
                      onChange={(e) => setCity(e.target.value)} required
                    >
                      <option>-Select City-</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Dehli">Delhi</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
              <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='me-2'>Gender</Form.Label>
                    <Form.Check
                      type="radio"
                      inline label="Male"
                      name="gender"
                      id="gender-male"
                      value="Male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <Form.Check
                      type="radio"
                      inline label="Female"
                      name="gender"
                      id="gender-female"
                      value="Female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='me-2'>Subject</Form.Label>
                    <Form.Check
                      inline
                      type="checkbox"
                      label="HTML"
                      name="HTML"
                      value="HTML"
                      onChange={handleSubjectChange}
                    />
                    <Form.Check
                      inline
                      type="checkbox"
                      label="CSS"
                      name="CSS"
                      value="CSS"
                      onChange={handleSubjectChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      // required
                      name="file" />
                  </Form.Group>
                </Col>
              </Row> */}
              {/* <Row>
                <Form.Group>
                  <Button className='w-100' type="submit">Submit form</Button>
                </Form.Group>
              </Row> */}
            </Form>
          </Col >
        </Row >
      </Container >
    </>
  )
}

export default Register;
