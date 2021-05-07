import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Head from "./Header";
import Foot from "./Footer";


class Enrol extends Component{
    render(){
        return(
            <>
            <Head/>
            <div className=" d-flex bg-body">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12 col-12 rounded bg-bright mt-4  pt-4 mb-4 pb-4">
                            <h2 className="f-color  text-center">Register</h2>
                            <Form>
                            <Form.Group>
                                <Form.Label className="f-color fw-600 text-uppercase">User Type</Form.Label>
                                <Form.Control as="select" >
                                    <option>Donate Plasma</option>
                                    <option>Request Plasma</option>
                                </Form.Control>
                                <br/>
                                <Form.Label className="f-color fw-600 text-uppercase">Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                                <br/>
                                <Form.Label className="f-color fw-600 text-uppercase">Blood Group</Form.Label>
                                        <Form.Control as="select" >
                                            <option>O+</option>
                                            <option>O-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                        </Form.Control>
                            <br/>
                            <Form.Label className="f-color fw-600 text-uppercase">Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            <br/>
                            <Form.Label className="f-color fw-600 text-uppercase">Mobile Number</Form.Label>
                                <Form.Control type="tel" placeholder="Mobile Numer" />
                            <br/>
                            <Form.Label className="f-color fw-600 text-uppercase">Age</Form.Label>
                                <Form.Control type="text" placeholder="Age" />
                            <br/>
                            <Form.Label className="f-color fw-600 text-uppercase">NEGATIVE REPORT DATE:</Form.Label>
                                <Form.Control type="date" placeholder="Report Date" />
                            <br/>
                            <Form.Label className="f-color fw-600 text-uppercase">Area</Form.Label>
                                <Form.Control type="text" placeholder="Area " />
                                <br/>
                            <Form.Label className="f-color fw-600 text-uppercase">Pincode</Form.Label>
                                <Form.Control type="number" placeholder="110001" />
                                <br/>
                                <Button  className="bg-frntdark" type="submit" block>Submit</Button>
                            </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
                <Foot/>
                </>
        )
    }
} 

export default Enrol;