import React from 'react';
import '../globcss/custom.css';
import {Link} from "react-router-dom";

const Foot = () =>{
    return(
        <footer>
            <div className="d-flex bg-frntdark">
            <div className="container mt-5 mb-5 ">
                <div className='row foot'>
                    <div className="col-lg-7 col-12">
                        <div className="d-flex pr-2 pl-2 mt-2 mb-2">
                            <img src={process.env.PUBLIC_URL+"/images/logo/logo-dark.png"} alt=""/>
                        </div>
                        <p>This website is for health information and advice about coronavirus (COVID-19), how to prevent and protect yourself from disease.Learn about the government response to coronavirus on GOV.UK.</p>
                    </div>
                    <div className="col-lg-2 col-6">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <Link to="/register">
                                        Donate Plasma
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                        Request Plasma
                                </Link>
                            </li>
                            <li>
                                <Link to="/list/donor">
                                        Plasma Donor List
                                </Link>
                            </li>
                            <li>
                                <Link to="/list/request">
                                        Plasma Request List
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                    <h5>Important Links</h5>
                        <ul>
                            <li>
                                <Link to="https://www.cowin.gov.in/">
                                    Register for Vaccination
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.mohfw.gov.in/" >
                                    Ministry of health and Family Welfare
                                </Link>
                            </li>
                            <li>
                                <Link to="https://delhifightscorona.in/">
                                    Delhi Fight Corona
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
                <div className="footsoul">
                    <div className="container">
                        <div className="col-lg-12 col-12">
                            <span>© Copyright 2021 . All Right Reserved By </span>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Foot;