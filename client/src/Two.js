import React from 'react';
import {useLocation} from "react-router-dom";

const Two = () => {
    const location = useLocation();
        return(
        <>
        <h1>my current location is {location.pathname}</h1>
        {/* {console.log(location.pathname)} */}
            {/* <button onClick={() => history.goBack()}>Back</button> */}
            {/* <button onClick={() => history.goForward()}>Forward</button> */}
        </>
        )
    }
export default Two;
