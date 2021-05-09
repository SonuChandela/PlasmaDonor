import React from 'react';
import {Link} from  'react-router-dom';

const Bgroup = () => {
    return(
        <div className="d-flex bg-bright">
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center mt-2 mb-2">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-center">
                    <h2 className="title">Our Available Blood Group</h2>
                </div>
                <div className="col-md-2"></div>
            </div>
                <div className="row mt-4 mb-4">
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/apositiveblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '} */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/anagativeblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '} */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/bpositiveblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '} */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/bnagativeblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '} */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/opositiveblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '} */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/onagativeblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '} */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/abpositiveblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '} */}
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                        <Link to='/list/request'>
                            <div className=" border border-5 rounded bg-body mt-2 mb-2 pt-2 mt-2 mb-2 pb-2 pr-2 pl-2">
                                <div className="d-flex justify-content-center mt-2 mb-2">
                                    <img src={process.env.PUBLIC_URL+"/images/icon/abnagativeblood.svg"} alt="" style={{width:"60%"}}/>
                                </div>
                            {/* <Button variant="primary" type="submit" block>View All</Button>{' '}*/}
                            </div>
                        </Link>
                    </div>

                </div> 

        </div>
        </div>
    )
}

export default Bgroup;