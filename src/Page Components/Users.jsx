import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin7Line } from "react-icons/ri";

const Users = () => {

    const [userData, setUserData] = useState([])

    // const navigate = useNavigate()

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
                        <div className="d-flex justify-content-end mb-3">
                            <Button variant="primary" className='m-0 px-2 py-1'>
                                <Link to="/register" className='text-decoration-none text-white d-flex align-items-center'>
                                    <FaPlus className='me-2' />
                                    <span>Add User</span>
                                </Link>
                            </Button>
                        </div>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Product / Service</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((Register, id) => {
                                    return (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{Register.name}</td>
                                            <td>{Register.mobile}</td>
                                            <td>{Register.address}</td>
                                            <td>{Register.product}</td>
                                            <td className='d-flex justify-content-center align-items-center p-1'>
                                                {/* <Button className='bg-transparent border-0'>
                                                    <FiEdit className='fs-5 text-primary' />
                                                </Button> */}
                                                <Button variant='danger' className='py-1 border-0 d-flex justify-content-center align-items-center' onClick={() => deletedata(Register._id)}>
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
