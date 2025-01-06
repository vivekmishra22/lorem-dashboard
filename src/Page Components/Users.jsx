import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin7Line } from "react-icons/ri";

const Users = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        showUsers()
    }, [])

    const showUsers = () => {
        axios.get(`http://localhost:8000/getuser`)
            .then(res => {
                setUserData(res.data.data)
            }).catch(err => {
                console.log(err);
            })
    }

    const deletedata = (id) => {
        axios.delete(`http://localhost:8000/deleteuser/${id}`)
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
                    <Col md={10} xs={12} className='my-5'>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Name</th>
                                    {/* <th>Card Description</th> */}
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Subject</th>
                                    <th>Images</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((Register, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{Register.fname}</td>
                                            <td>{Register.email}</td>
                                            <td>{Register.mobile}</td>
                                            <td>{Register.address}</td>
                                            <td>{Register.city}</td>
                                            <td>{Register.gender}</td>
                                            <td>{Register.subject}</td>
                                            <td></td>
                                            <td className='d-flex justify-content-center align-items-center p-2'>
                                                {/* <Button className='bg-transparent border-0'>
                                                    <FiEdit className='fs-5 text-primary' />
                                                </Button> */}
                                                <Button variant='danger' className='border-0 d-flex justify-content-center align-items-center' onClick={() => deletedata(Register._id)}>
                                                    {/* <RiDeleteBin7Line className='fs-5 text-dark me-2' /> */}
                                                    <span>Delete</span>
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

export default Users;
