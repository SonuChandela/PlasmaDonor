import React, { Component } from 'react';
import '../globcss/App.css';
import Searchbar from '../components/Search/Searchbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props);
    let setList = (this.props.match.params.rquesttype === "donor") ? this.props.donorData : this.props.requestData
    this.state = {
      userList: Object.values(setList)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.rquesttype !== this.props.match.params.rquesttype) {
      let setList = (this.props.match.params.rquesttype === "donor") ? this.props.donorData : this.props.requestData
      this.setState({
        userList: Object.values(setList)
      })
    }
  }

  searchgroup = (e, list) => {
    const searchValue = e.target.value;
    this.setState({
      ...this.state,
      searchKey: searchValue
    })
  }
  render() {
    const { userList, searchKey } = this.state;
    const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const bloodGroupList = [];
    for (const [index, value] of bloodGroup.entries()) {
      bloodGroupList.push(<li key={index} onClick={(e) => {
        this.setState({
          ...this.state,
          searchKey: e.target.textContent
        })
      }}><span>{value}</span></li>)
    }
    return (
      <>
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
        <Searchbar searchmethod={this.searchgroup} list={userList} />
        {/* <Searchbar searchKey={() => this.searchgroup(userList)} /> */}
        {/* search */}

        <div className="container">
          <div className="row mt-3 mb-3 bloodfilter">
            <ul className="col-lg-12 col-md-12">
              {bloodGroupList}
            </ul>
          </div>

          <div className="row mt-4 mb-4">
            {

              Object.values(userList).filter((searchValue) => {
                if (searchKey === undefined || searchKey === "") {
                  return searchValue
                } else if (searchValue.area.includes(searchKey.toLowerCase()) || searchValue.pincode.includes(searchKey.toLowerCase()) || searchValue.bloodgroup.toLowerCase().includes(searchKey.toLowerCase())) {
                  return searchValue
                }
              }).map((userData, i) => {
                const datalist = userData;
                return (
                  <div className="col-lg-3 col-md-6 col-12" key={i} >
                    <div className="donor-card">
                      <div className="col-lg-12 mt-2 mb-2">
                        <div className="row mr-0 ml-0">
                          <div className="col-lg-2 col-2 pl-2 pr-2 d-flex justify-content-left align-items-center">
                            <img src={process.env.PUBLIC_URL + '/images/icon/blood-drop.svg'} alt="" />
                          </div>
                          <div className="col-lg-8 col-8 pr-0 pl-0 text-center">
                            <span className="mb-0 text-uppercase">{userData.usertype}</span>
                          </div>
                          <div className="col-lg-2 col-2 d-flex justify-content-center align-items-center bg-frntdark rounded">
                            <span className="f-bright ">{userData.bloodgroup}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 donor-dtl">
                        <ul>
                          {
                            Object.entries(datalist).map((list, index) => {
                              return (
                                <>
                                  {
                                    (list[0] === "_id" || list[0] === "__v" || list[0] === "createdAt") ? "" :
                                      <>
                                        <li key={index}>
                                          <span className={(list[0] === "email") ? "text-lowercase" : ""}>
                                            <b className="text-uppercase">{list[0]}:</b>
                                      &nbsp; {list[1]}
                                          </span>
                                        </li>
                                      </>
                                  }
                                </>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="col-lg-12">
                        <Button href={`tel:${userData.mobile}`} className="border-0" block>
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(List);
