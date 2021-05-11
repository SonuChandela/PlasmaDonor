import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Donorslist = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-lg-8 mt-4 mb-4">
            <h2 className="text-center title">Recent Donors</h2>
          </div>
        </div>
        <div className="row mt-3 mb-3   ">
          <div className="col-lg-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Blood Group</th>
                  <th>Name</th>
                  <th>Location/Area Code</th>
                  <th>Negative Test Report Date</th>
                  <th>Contact Number</th>
                  {/* {Array.from({ length: 4 }).map((_, index) => (
                                    <th key={index}>Table heading</th>
                                ))} */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>A+</th>
                  <td>Sonu</td>
                  <td>Kirari suleman nagar, delhi 110086</td>
                  <td>10/4/2021</td>
                  <td>
                    <Link to="9998639929">9999863929</Link>
                  </td>
                  {/* {Array.from({ length: 4 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))} */}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donorslist;
