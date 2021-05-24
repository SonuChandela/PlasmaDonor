import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import '../../globcss/App.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class Enrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        setdata: {},
        alerterror: {}
      }
    }
    this.textInput = React.createRef();
  }

  validAlerts = (e) => {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    let { name, value } = e.target;
    const alertError = {};
    switch (name) {
      case 'user':
        alertError[name] = (value === "" || value === undefined || value === null) ? 'select a User Type' : "";
        break;
      case 'name':
        alertError[name] = (value <= 0) ? 'Enter Your Full Name' : '';
        break;
      case 'bloodgroup':
        alertError[name] = (value === "") ? 'Select a BloodGroup' : '';
        break;
      case 'email':
        alertError[name] = (emailRegex.test(value)) ? '' : 'Write a Valid Email Address';
        break;
      case 'mobile':
        alertError[name] =
          (value.length === 10) ? '' : 'Enter a Vaild Mobile Number';
        break;
      case 'age':
        alertError[name] =
          (value > 60 || value < 18) ? 'You Are Between 18-60 Years Old' : '';
        break;
      case 'report':
        let calDay = this.reportDay(value);
        alertError[name] = (calDay <= 14) ? 'Donate only 14 days of a COVID-19 positive report if the person is asymptomatic' : '';
        break;
      case 'area':
        alertError[name] = (value.length <= 0) ? 'Enter Area Name / City Name' : '';
        break;
      case 'pincode':
        alertError[name] = value.length <= 0 ? 'Enter a valid Pin Code' : '';
        break;
      default:
    }

    this.setState({
      data: {
        setdata: {
          ...this.state.data.setdata,
          [e.target.name]: e.target.value,
        },
        alerterror: {
          ...this.state.data.alerterror,
          [name]: alertError[name]
        }
      }
    })

  }

  reportDay = (reportdate) => {
    const date = new Date();
    let currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const testDate = new Date(reportdate);
    const todayDate = new Date(currentDate);
    let diffrenceInms = todayDate.getTime() - testDate.getTime();
    const diffrenceInDay = Math.round(diffrenceInms / (1000 * 3600 * 24));
    return diffrenceInDay;
  };

  // formisvlid(validation, data) {
  //   let valid = true;
  //   Object.values(validation).forEach((value) => {
  //     value.length > 0 && (valid = false);
  //   });
  //   Object.values(data).forEach((value) => {
  //     value.length < 1 && (valid = false);
  //   });
  //   return valid;
  // }


  submitForm = (e) => {
    e.preventDefault();
    let { setdata, alerterror } = this.state.data;
    let dataPromise = new Promise((resolve, reject) => {
      for (let validalert of Object.values(alerterror)) {
        console.log(validalert.length);
        if (validalert.length < 1) {
          resolve();
        } else {
          reject();
        }
      }
    })

    dataPromise.then(() => {
      axios
        .post('http://localhost:5000/register', setdata)
        .then((res) => {
          let msg = res.data.success;
          alert(msg);
          console.log(msg);
        })
        .catch((error) => {
          console.log(error);
        });
    }).catch(() => {
      alert("Ooops, Somthing wasn't right Please file all fields.");
    })
    // alert("fille the form")
    // }
    // for (let value of Object.values(filleddata)) {
    //   let dsp = (value.length > 0) ? submitdata = "true" : value
    //   console.log(dsp);
    // }
    // const vst = new Promise(function (resolve, reject) {


    //   if (submitdata == "b") {
    //     resolve("abc");
    //   }
    //   else {
    //     reject("rong");
    //   }
    //   // let fillvalue = Object.values(filleddata);
    //   // let alertvalue = Object.values(alertdata);
    //   // for (let value of fillvalue) {
    //   //   (value.length > 0) ? submitdata = "true" : fillvalue
    //   // }
    //   // for (let value of alertvalue) {
    //   //   (value.length < 1) ? submitdata = "true" : alertvalue
    //   // }
    // })
    // vst.then((tst) => {
    //   console.log(tst);
    // }).catch((tst) => {
    //   console.log(tst);
    // })


    // let data = this.state.data.setdata;
    // axios
    //   .post('http://localhost:5000/register', data)
    //   .then((res) => {
    //     let msg = res.data.setdata;
    //     console.log(msg);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // if (this.formisvlid(this.state.setValidate, this.state.data)) {
    // } else {
    //   alert("Ooops, Somthing wasn't right Please file all fields.");
    // }
  }

  render() {
    let { setdata, alerterror } = this.state.data;
    return (
      <>
        <div className="d-flex">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-12 rounded bg-bright  mb-4 pb-4">
                <h2 className="f-color  text-center">
                  {setdata.user === this.props.usertype
                    ? 'I want to donate plasma'
                    : (setdata.user === "request plasma") ? 'I am searching for Plasma donor' : 'Select User Type'
                  }
                </h2>
                <Form action="" onSubmit={this.validAlerts}>
                  <Form.Group>
                    <Form.Label className="f-color fw-600 text-uppercase">
                      User Type
                    </Form.Label>
                    <Form.Control
                      as="select"
                      ref={this.textInput}
                      onChange={this.validAlerts}
                      name="user"
                      defaultValue=""
                      className={(alerterror.user !== undefined) ? (alerterror.user.length > 0) ? 'brdAlert' : "" : ""}
                    >
                      <option selected value="">Select User Type</option>
                      <option value="donate plasma">Donate Plasma</option>
                      <option value="request plasma">Request Plasma</option>
                    </Form.Control>
                    {
                      (alerterror.user !== undefined) ? (alerterror.user.length > 0) ? (<small className="f-alert text-capitalize">{alerterror.user}</small>) : "" : ""
                    }
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">
                      Full Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={setdata.name || ''}
                      className={(alerterror.name !== undefined && alerterror.name.length > 0) ? 'brdAlert' : ""}
                      onChange={this.validAlerts}
                    />

                    {
                      (alerterror.name !== undefined) ? (alerterror.name.length > 0) ? (<small className="f-alert">{alerterror.name}</small>) : "" : ""
                    }

                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">
                      Blood Group
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="bloodgroup"
                      className={(alerterror.bloodgroup !== undefined) ? (alerterror.bloodgroup.length > 0) ? 'brdAlert' : "" : ""}
                      onChange={this.validAlerts} defaultValue=""

                    >
                      <option selected value="">Select Blood Group</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </Form.Control>
                    {
                      (alerterror.bloodgroup !== undefined) ? (alerterror.bloodgroup.length > 0) ? (<small className="f-alert">{alerterror.bloodgroup}</small>) : "" : ""
                    }
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      className={(alerterror.email !== undefined) ? (alerterror.email.length > 0) ? 'brdAlert' : "" : ""}
                      onChange={this.validAlerts}
                    />
                    {
                      (alerterror.email !== undefined) ? (alerterror.email.length > 0) ? (<small className="f-alert">{alerterror.email}</small>) : "" : ""
                    }

                    <br />

                    <Form.Label className="f-color fw-600 text-uppercase">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="9999999999"
                      value={setdata.mobile || ''}
                      className={(alerterror.mobile !== undefined) ? (alerterror.mobile.length > 0) ? 'brdAlert' : "" : ""}
                      name="mobile"
                      onChange={this.validAlerts}
                    />


                    {
                      (alerterror.mobile !== undefined) ? (alerterror.mobile.length > 0) ? (<small className="f-alert">{alerterror.mobile}</small>) : "" : ""
                    }

                    <br />

                    {this.state.usertype === this.props.userType ? (
                      <>
                        <Form.Label className="f-color fw-600 text-uppercase">
                          Age
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Age"
                          name="age"
                          value={setdata.age || ''}
                          className={(alerterror.age !== undefined) ? (alerterror.age.length > 0) ? 'brdAlert' : "" : ""}
                          maxlength="2"
                          size="2"
                          onChange={this.validAlerts}
                        />
                        {
                          (alerterror.age !== undefined) ? (alerterror.age.length > 0) ? (<small className="f-alert">{alerterror.age}</small>) : "" : ""
                        }
                        <br />
                        <Form.Label className="f-color fw-600 text-uppercase">
                          NEGATIVE REPORT DATE:
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Report Date"
                          name="report"
                          value={setdata.report || ''}

                          className={(alerterror.report !== undefined) ? (alerterror.report.length > 0) ? 'brdAlert' : "" : ""}

                          onChange={this.validAlerts}
                        />

                        {
                          (alerterror.report !== undefined) ? (alerterror.report.length > 0) ? (<small className="f-alert">{alerterror.report}</small>) : "" : ""
                        }

                        <br />
                      </>
                    ) : (
                      ''
                    )}
                    <Form.Label className="f-color fw-600 text-uppercase">
                      City / Area
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City / Area "
                      name="area"
                      value={setdata.area || ''}
                      className={(alerterror.area !== undefined) ? (alerterror.area.length > 0) ? 'brdAlert' : "" : ""}
                      onChange={this.validAlerts}
                    />
                    {
                      (alerterror.area !== undefined) ? (alerterror.area.length > 0) ? (<small className="f-alert">{alerterror.area}</small>) : "" : ""
                    }
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">
                      Pincode
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="110001"
                      name="pincode"
                      maxlength="6"
                      size="6"
                      value={setdata.pincode || ''}
                      className={(alerterror.pincode !== undefined) ? (alerterror.pincode.length > 0) ? 'brdAlert' : "" : ""}
                      onChange={this.validAlerts}
                    />
                    {
                      (alerterror.pincode !== undefined) ? (alerterror.pincode.length > 0) ? (<small className="f-alert">{alerterror.pincode}</small>) : "" : ""
                    }
                    <br />
                    <Button
                      className="bg-frntdark border-0"
                      type="submit"
                      onClick={this.submitForm}
                      block
                    >
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
