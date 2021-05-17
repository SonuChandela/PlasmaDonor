import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import '../../globcss/App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Enrol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setData: {
        usertype: '',
        name: '',
        bloodgroup: '',
        email: '',
        contact: '',
        age: '',
        reportDate: '',
        area: '',
        pincode: '',
      },
      setValidate: {
        usertype: '',
        name: '',
        bloodgroup: '',
        email: '',
        contact: '',
        age: '',
        reportDate: '',
        area: '',
        pincode: '',
      },
      usertype: this.props.userType,
    };
    this.validAlerts = this.validAlerts.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.reportDay = this.reportDay.bind(this);
    this.formisvlid = this.formisvlid.bind(this);
    this.textInput = React.createRef();
  }

  validAlerts(event) {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const data = this.state.setData;
    data[event.target.name] = event.target.value;
    let users = this.textInput.current.value;
    let setValidate = { ...this.state.setValidate };
    const { name, value } = event.target;
    switch (name) {
      case 'user':
        setValidate.usertype = value.length <= 0 ? 'select a User Type' : '';
        break;
      case 'email':
        setValidate.email = emailRegex.test(value)
          ? ''
          : 'Write a Valid Email Address';
        break;
      case 'contact':
        setValidate.contact =
          value.length === 10 ? '' : 'Enter a Vaild Mobile Number';
        break;
      case 'age':
        setValidate.age =
          value > 60 || value < 18 ? 'You Are Between 18-60 Years Old' : '';
        break;
      case 'reportDate':
        let calDay = this.reportDay(value);
        setValidate.reportDate =
          calDay <= 14
            ? 'Donate only 14 days of a COVID-19 positive report if the person is asymptomatic'
            : '';
        break;
      case 'area':
        setValidate.area =
          value.length <= 0 ? 'Enter Area Name / City Name' : '';
        break;
      case 'pincode':
        setValidate.pincode = value.length <= 0 ? 'Enter a valid Pin Code' : '';
        break;
      default:
    }
    this.setState({
      ...this.state,
      setData: data,
      setValidate,
      usertype: users,
    });
  }

  // componentDidMount(){
  //   this.setState({
  //     ...this.state,
  //     setData : {

  //     }
  //   })
  // }

  reportDay = (reportdate) => {
    const date = new Date();
    let currentDate =
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    const testDate = new Date(reportdate);
    const todayDate = new Date(currentDate);
    let diffrenceInms = todayDate.getTime() - testDate.getTime();
    const diffrenceInDay = Math.round(diffrenceInms / (1000 * 3600 * 24));
    return diffrenceInDay;
  };

  formisvlid(validation, setdata) {
    let valid = true;
    Object.values(validation).forEach((value) => {
      value.length > 0 && (valid = false);
    });
    Object.values(setdata).forEach((value) => {
      value.length < 1 && (valid = false);
    });
    // console.log(valid);
    return valid;
  }
  submitForm(e) {
    e.preventDefault();
    console.log(this.state.setValidate);
    console.log(this.state.setData);
    if (this.formisvlid(this.state.setValidate, this.state.setData)) {
      let data = this.state.setData;
      axios
        .post('http://localhost:5000/register', data)
        .then((res) => {
          let msg = res.data;
          console.log(msg);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Ooops, Somthing wasn't right Please file all fields.");
    }
  }

  render() {
    const { setData, setValidate } = this.state;
    return (
      <>
        <div className="d-flex">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-12 rounded bg-bright  mb-4 pb-4">
                <h2 className="f-color  text-center">
                  {this.state.usertype === this.props.userType
                    ? 'I want to donate plasma'
                    : 'I am searching for Plasma donor'}
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
                      name="usertype"
                    >
                      <option value="donate">Donate Plasma</option>
                      <option value="request">Request Plasma</option>
                    </Form.Control>

                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">
                      Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={setData.name || ''}
                      className={setValidate.name.length > 0 ? 'brdAlert' : ''}
                      onChange={this.validAlerts}
                    />
                    {setValidate.name.length > 0 ? (
                      <small className="f-alert">{setValidate.name}</small>
                    ) : (
                      ''
                    )}
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">
                      Blood Group
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="bloodgroup"
                      onChange={this.validAlerts}
                    >
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </Form.Control>
                    <br />
                    <Form.Label className="f-color fw-600 text-uppercase">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      className={setValidate.email.length > 0 ? 'brdAlert' : ''}
                      onChange={this.validAlerts}
                    />
                    {setValidate.email.length > 0 ? (
                      <small className="f-alert">{setValidate.email}</small>
                    ) : (
                      ''
                    )}
                    <br />

                    <Form.Label className="f-color fw-600 text-uppercase">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="9999999999"
                      value={setData.contact || ''}
                      className={
                        setValidate.contact.length > 0 ? 'brdAlert' : ''
                      }
                      name="mobile"
                      onChange={this.validAlerts}
                    />
                    {setValidate.contact.length > 0 ? (
                      <small className="f-alert">{setValidate.contact}</small>
                    ) : (
                      ''
                    )}
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
                          value={setData.age || ''}
                          className={
                            setValidate.age.length > 0 ? 'brdAlert' : ''
                          }
                          maxlength="2"
                          size="2"
                          onChange={this.validAlerts}
                        />
                        {setValidate.age.length > 0 ? (
                          <small className="f-alert">{setValidate.age}</small>
                        ) : (
                          ''
                        )}
                        <br />
                        <Form.Label className="f-color fw-600 text-uppercase">
                          NEGATIVE REPORT DATE:
                        </Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Report Date"
                          name="reportDate"
                          value={setData.reportDate || ''}
                          className={
                            setValidate.reportDate.length > 0 ? 'brdAlert' : ''
                          }
                          onChange={this.validAlerts}
                        />
                        {setValidate.reportDate.length > 0 ? (
                          <small className="f-alert">
                            {setValidate.reportDate}
                          </small>
                        ) : (
                          ''
                        )}
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
                      value={setData.area || ''}
                      className={setValidate.area.length > 0 ? 'brdAlert' : ''}
                      onChange={this.validAlerts}
                    />
                    {setValidate.area.length > 0 ? (
                      <small className="f-alert">{setValidate.area}</small>
                    ) : (
                      ''
                    )}
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
                      value={setData.pincode || ''}
                      className={
                        setValidate.pincode.length > 0 ? 'brdAlert' : ''
                      }
                      onChange={this.validAlerts}
                    />
                    {setValidate.pincode.length > 0 ? (
                      <small className="f-alert">{setValidate.pincode}</small>
                    ) : (
                      ''
                    )}
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
