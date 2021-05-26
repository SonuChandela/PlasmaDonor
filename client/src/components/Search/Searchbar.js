import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// const searchKey = (props) => {

//   // props.searchgroup()
// }


const Searchbar = (props) => {
  return (
    <div className="container searchbar">
      <div className="row ">
        <div className="col-md-2"></div>
        <div className="col-md-8 shadow-sm bg-bright pt-4 pb-4  rounded">
          <Form>
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8">
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label className="f-color fw-600 text-uppercase">City / Area Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Area City Name Or Area code" onChange={(e) => props.searchmethod(e, props.list)} />
                  {/* <Form.Control type="text" placeholder="Enter Your Area City Name Or Area code" onChange={ props.searchKey} /> */}
                </Form.Group>
              </div>
              <div className="col-md-4 pt-3">
                <Button className="bg-frntdark border-0" type="submit" block>
                  Search Donor
                  </Button>{' '}
              </div>
            </div>
          </Form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Searchbar;
