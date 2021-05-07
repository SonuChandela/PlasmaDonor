import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Searchbar extends Component{
    render(){
        return(
            <div className="container searchbar ">
                <div className="row ">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8 shadow-sm bg-bright pt-4 pb-4  rounded">
                                <Form>
                        <div className="row align-items-center">
                                <div className="col-md-4" >
                                <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label className="f-color fw-600 text-uppercase">Area Code</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your area code" />
                                </Form.Group>
                                </div>
                                <div className="col-md-4">
                                <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label className="f-color fw-600 text-uppercase">Blood Group</Form.Label>
                                        <Form.Control as="select" custom>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        </Form.Control>
                                </Form.Group>
                                </div>
                                <div className="col-md-4">
                                <Button variant="primary" type="submit" block>Find Donor</Button>{' '}
                                </div>
                        </div>
                            </Form>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        )
    }
}

export default Searchbar;