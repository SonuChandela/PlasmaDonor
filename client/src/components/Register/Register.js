import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import "../../globcss/App.css"
import Button from 'react-bootstrap/Button';

class Enrol extends Component {
  constructor(props){
    super(props);
    this.state = {
      setData : {},
      usertype: this.props.userType,
      setValidate : {
        name: "",
        email: "",
        mobile :"",
        age : "",
        report: "",
        area : "",
        pincode : ""
      }
    }
    this.validAlerts = this.validAlerts.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reportDay = this.reportDay.bind(this);
    this.textInput = React.createRef();
    

  }
  
 

  validAlerts(e){
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const data  = this.state.setData;
    data[e.target.name] = e.target.value;
    let users = this.textInput.current.value;
    let validate = {...this.state.setValidate};
    const{name,value} = e.target;
    switch (name){
      case "name":
        validate.name = (value.length <= 0) ? "Enter Your Full Name" : "";
        break;
      case "email":
        validate.email = ( emailRegex.test(value)) ? "" :"Write a Valid Email Address";
        break;
      case "contact": 
        validate.mobile = (value.length === 10) ?  "" : "Enter a Vaild Mobile Number" ;
      break;
      case "age": 
        validate.age = (value > 60 || value < 18) ? "You Are Between 18-60 Years Old" :  "";
      break;
      case "reportDate": 
        let calDay = this.reportDay(value);
        validate.report = (calDay <= 14 ) ? "Donate only 14 days of a COVID-19 positive report if the person is asymptomatic" : "";
      break;
      case "area": 
        validate.area = (value.length <= 0) ? "Enter Area Name / City Name" :  "";
      break;
      case "pincode": 
        validate.pincode = (value.length <= 0) ? "Enter a valid Pin Code" :  "";
      break;
      default:  
    }
    
    this.setState({
      setData : data ,
      usertype: users,
      setValidate :{
        name: validate.name,
        email: validate.email,
        mobile : validate.mobile,
        age : validate.age,
        report: validate.report,
        area : validate.area,
        pincode : validate.pincode
      }
    })
  }

  reportDay = (reportdate) => {
    const date = new Date();
    let currentDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    const testDate = new Date(reportdate);
    const todayDate = new Date(currentDate); 
    let diffrenceInms = todayDate.getTime() - testDate.getTime();
    const diffrenceInDay = Math.round(diffrenceInms / ( 1000 * 3600 * 24 ));
    return (diffrenceInDay);
  }



  formisvlid (){

  }
  submitForm(e) {
    e.preventDefault()
    
  }

  render() {
    const {setData,setValidate} = this.state;
    return (
      <>
        <div className="d-flex">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-12 rounded bg-bright  mb-4 pb-4">
                <h2 className="f-color  text-center">{(this.state.usertype === this.props.userType) ? "I want to donate plasma" : "I am searching for Plasma donor"}</h2>
                <Form action="" onSubmit={this.submitForm}>
                  <Form.Group>

                    <Form.Label className="f-color fw-600 text-uppercase">User Type</Form.Label>
                    <Form.Control as="select" ref={this.textInput} onChange={this.validAlerts} name="userType">
                      <option value="donate">Donate Plasma</option>
                      <option value="request">Request Plasma</option>
                    </Form.Control>

                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" value={setData.name || ""} className={(setValidate.name.length > 0 ) ? "brdAlert" : ""} onChange={this.validAlerts} />
                    {(setValidate.name.length > 0 ) ? <small className="f-alert">{setValidate.name}</small> : ""  }
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">Blood Group</Form.Label>
                    <Form.Control as="select" name="bloodgroup" onChange={this.validAlerts}>
                      <option>O+</option>
                      <option>O-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                    </Form.Control>
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" className={(setValidate.email.length > 0 ) ? "brdAlert" : ""} onChange={this.validAlerts}/>
                    {(setValidate.email.length > 0 ) ? <small className="f-alert">{setValidate.email}</small> : ""  }
                    <br />

                    <Form.Label className="f-color fw-600 text-uppercase">Mobile Number</Form.Label>
                    <Form.Control type="tel" placeholder="9999999999" value={setData.contact || ""} className={(setValidate.mobile.length > 0 ) ? "brdAlert" : ""} name="contact" onChange={this.validAlerts}/>
                    {(setValidate.mobile.length > 0 ) ? <small className="f-alert">{setValidate.mobile}</small> : ""  }
                    <br />

                    {
                      (this.state.usertype === this.props.userType) ? 
                      <>
                        <Form.Label className="f-color fw-600 text-uppercase">Age</Form.Label>
                        <Form.Control type="text" placeholder="Age" name="age" value={setData.age || ""} className={(setValidate.age.length > 0 ) ? "brdAlert" : ""} maxlength="2" size="2" onChange={this.validAlerts}/>
                        {(setValidate.age.length > 0 ) ? <small className="f-alert">{setValidate.age}</small> : ""}
                        <br />
                      <Form.Label className="f-color fw-600 text-uppercase">NEGATIVE REPORT DATE:</Form.Label>
                      <Form.Control type="date" placeholder="Report Date" name="reportDate" value={setData.reportDate || ""} className={(setValidate.report.length > 0 ) ? "brdAlert" : ""}  onChange={this.validAlerts}/> 
                      {(setValidate.report.length > 0 ) ? <small className="f-alert">{setValidate.report}</small> : ""  }
                      <br/>
                      </> : ''
                    }
                    <Form.Label className="f-color fw-600 text-uppercase">City / Area</Form.Label>
                    <Form.Control type="text" placeholder="City / Area " name="area" value={setData.area || ""} className={(setValidate.area.length > 0 ) ? "brdAlert" : ""} onChange={this.validAlerts}/>
                    {(setValidate.area.length > 0 ) ? <small className="f-alert">{setValidate.area}</small> : ""  }
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">Pincode</Form.Label>
                    <Form.Control type="text" placeholder="110001" name="pincode" maxlength="6" size="6" value={setData.pincode || ""} className={(setValidate.pincode.length > 0 ) ? "brdAlert" : ""} onChange={this.validAlerts}/>
                    {(setValidate.pincode.length > 0 ) ? <small className="f-alert">{setValidate.pincode}</small> : ""  }
                    <br />
                    <Button className="bg-frntdark border-0" type="submit" block>
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Enrol;
