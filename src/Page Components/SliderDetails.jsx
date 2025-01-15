import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
// import { FaPlus } from "react-icons/fa";

const SliderDetails = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        showUsers()
    }, [])

    const showUsers = () => {
        axios.get(`http://localhost:8000/getslider`)
            .then(res => {
                setUserData(res.data.data)
            }).catch(err => {
                console.log(err);
            })
    }

    const deletedata = (id) => {
        axios.delete(`http://localhost:8000/deleteslider/${id}`)
            .then(
                res => {
                    console.log('User Deleted : ', res.data);
                    alert('User Delete');
                    showUsers()
                }
            ).catch(error => {
                console.error('Error Deleting User : ', error);
            });
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={10} xs={12} className='my-5 mx-auto'>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Slider Title</th>
                                    <th>Slider Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((Slider, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{Slider.sliderHeading}</td>
                                            <td>{Slider.sliderDescription}</td>
                                            {/* <td>{Register.email}</td>
                                            <td>{Register.mobile}</td>
                                            <td>{Register.address}</td>
                                            <td>{Register.city}</td>
                                            <td>{Register.gender}</td>
                                            <td>{Register.subject}</td>
                                            <td></td> */}
                                            <td className='p-1 d-flex justify-content-center align-items-center'>
                                                <Button className='bg-transparent border-0'>
                                                    <FiEdit className='fs-5 text-warning' />
                                                </Button>
                                                <Button className='bg-transparent border-0' onClick={() => deletedata(Slider._id)}>
                                                    <RiDeleteBin7Line className='fs-5 text-danger' />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default SliderDetails;
