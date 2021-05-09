import React, { Component } from 'react';
import './globcss/custome.css';
import Menu from "./Header";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class List extends Component{
    render(){
        return(
            <>
            <Menu/>
            <div className="bg-frntdark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 pt-5 pb-5">
                            <h1 className="d-flex f-bright text-uppercase mt-3 mb-5">Donors</h1>
                        </div>
                    </div>
                </div>
            </div>
                {/* search */}
                <Searchbar/>
                {/* search */}


            <div className="container">
                <div className="row mt-4 mb-4">

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="donor-card">
                            <div className="col-lg-12 mt-2 mb-2">
                                <div className="row mr-0 ml-0">
                                    <div className="col-lg-2 col-2 pl-2 pr-2 d-flex justify-content-left align-items-center">
                                        <img src={process.env.PUBLIC_URL+"/images/icon/blood-drop.svg"} alt="" />
                                    </div>
                                    <div className="col-lg-8 col-8 pr-0 pl-0">
                                        <span className="mb-0 ">Plasma Request</span>
                                    </div>
                                    <div className="col-lg-2 col-2 d-flex justify-content-center align-items-center bg-frntdark rounded">
                                        <span className="f-bright ">A+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 donor-dtl">
                                <ul>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Name:</b>                             
                                            &nbsp;
                                            Sonu Chandela
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Blood Group:</b>                             
                                            &nbsp;
                                            A+
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Mobile:</b>                             
                                            &nbsp;
                                            9999863929
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Area/City:</b>                             
                                            &nbsp;
                                            Delhi
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Pin Code:</b>                             
                                            &nbsp;
                                            110086
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-12">
                                <Button href="tel:999986329" block>Contact</Button> 
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="donor-card">
                            <div className="col-lg-12 mt-2 mb-2">
                                <div className="row mr-0 ml-0">
                                    <div className="col-lg-2 col-2 pl-2 pr-2 d-flex justify-content-left align-items-center">
                                        <img src={process.env.PUBLIC_URL+"/images/icon/blood-drop.svg"} alt="" />
                                    </div>
                                    <div className="col-lg-8 col-8 pr-0 pl-0">
                                        <span className="mb-0 ">Plasma Donor</span>
                                    </div>
                                    <div className="col-lg-2 col-2 d-flex justify-content-center align-items-center bg-frntdark rounded">
                                        <span className="f-bright ">A+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 donor-dtl">
                                <ul>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Name:</b>                             
                                            &nbsp;
                                            Sonu Chandela
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Blood Group:</b>                             
                                            &nbsp;
                                            A+
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Age:</b>                             
                                            &nbsp;
                                            25
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Negative report Date:</b>                             
                                            &nbsp;
                                            13/4/2021
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Mobile:</b>                             
                                            &nbsp;
                                            9999863929
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Area/City:</b>                             
                                            &nbsp;
                                            Delhi
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Pin Code:</b>                             
                                            &nbsp;
                                            110086
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-12">
                                <Button href="tel:999986329" block>Contact</Button> 
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="donor-card">
                            <div className="col-lg-12 mt-2 mb-2">
                                <div className="row mr-0 ml-0">
                                    <div className="col-lg-2 col-2 pl-2 pr-2 d-flex justify-content-left align-items-center">
                                        <img src={process.env.PUBLIC_URL+"/images/icon/blood-drop.svg"} alt="" />
                                    </div>
                                    <div className="col-lg-8 col-8 pr-0 pl-0">
                                        <span className="mb-0 ">Plasma Donor</span>
                                    </div>
                                    <div className="col-lg-2 col-2 d-flex justify-content-center align-items-center bg-frntdark rounded">
                                        <span className="f-bright ">A+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 donor-dtl">
                                <ul>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Name:</b>                             
                                            &nbsp;
                                            Sonu Chandela
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Blood Group:</b>                             
                                            &nbsp;
                                            A+
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Age:</b>                             
                                            &nbsp;
                                            25
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Negative report Date:</b>                             
                                            &nbsp;
                                            13/4/2021
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Mobile:</b>                             
                                            &nbsp;
                                            9999863929
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Area/City:</b>                             
                                            &nbsp;
                                            Delhi
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Pin Code:</b>                             
                                            &nbsp;
                                            110086
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-12">
                                <Button href="tel:999986329" block>Contact</Button> 
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="donor-card">
                            <div className="col-lg-12 mt-2 mb-2">
                                <div className="row mr-0 ml-0">
                                    <div className="col-lg-2 col-2 pl-2 pr-2 d-flex justify-content-left align-items-center">
                                        <img src={process.env.PUBLIC_URL+"/images/icon/blood-drop.svg"} alt="" />
                                    </div>
                                    <div className="col-lg-8 col-8 pr-0 pl-0">
                                        <span className="mb-0 ">Plasma Donor</span>
                                    </div>
                                    <div className="col-lg-2 col-2 d-flex justify-content-center align-items-center bg-frntdark rounded">
                                        <span className="f-bright ">A+</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 donor-dtl">
                                <ul>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Name:</b>                             
                                            &nbsp;
                                            Sonu Chandela
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Blood Group:</b>                             
                                            &nbsp;
                                            A+
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Age:</b>                             
                                            &nbsp;
                                            25
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Negative report Date:</b>                             
                                            &nbsp;
                                            13/4/2021
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Mobile:</b>                             
                                            &nbsp;
                                            9999863929
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Area/City:</b>                             
                                            &nbsp;
                                            Delhi
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <b className="text-uppercase">Pin Code:</b>                             
                                            &nbsp;
                                            110086
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-12">
                                <Button href="tel:999986329" block>Contact</Button> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <Footer/>
            </>
        )
     }
}
export default List;