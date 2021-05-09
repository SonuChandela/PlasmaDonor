import React from 'react';
import '../globcss/custom.css';
import Searchbar from './Searchbar';


const Banner = () =>{
    return(
        <section className="bannerCntr">
        <div className="container ">
            <div className="row mt-4 mb-4" >
                <div className="col-md-6 ">
                    <div className="">
                        <h1 className="text-uppercase f-color text-left">
                            <span style={{fontSize:"0.9em",fontWeight:"800",letterSpacing:"6px"}}>                                Donate Plasma                            </span> <br/>
                            <span style={{fontSize:"0.8em",fontWeight:"700",letterSpacing:"15px",color:"#ff5363"}}>To Save Life</span>
                        </h1>
                        <p style={{fontSize:"1.1em",textAlign:"left",fontWeight:"600", textTransform:"capitalize"}}>This website would help Donors, as well as patients in need of plasma .we allow you to search plasma Donors within your city area and having a specific blood group.If you have fully recovered from COVID-19,or if you are a recipient get your self registered on the Website and help the society. We are all in this together and we will win as a community.</p>
                    </div>
                        <ul className="row status">
                            <li className="col-sm-4 text-center">
                                <h6>
                                    PLASMA DONATION
                                </h6>
                                <span>4546</span>
                            </li>
                            <li className="col-sm-4 text-center">
                                <h6>
                                    PLASMA REQUEST
                                </h6>
                                <span>4546</span>
                            </li>
                            <li className="col-sm-4 text-center">
                                <h6>
                                    TOTAL QUERY
                                </h6>
                                <span>4546</span>
                            </li>
                        </ul>
                </div>
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL+"/images/header-a.png"} alt="" style={{width:"100%"}}/>
                </div>

            </div>
        </div>
                {/* search bar start */}
                <Searchbar/>
                {/* seacrch bar close */}
        </section>

    );
}

export default Banner;