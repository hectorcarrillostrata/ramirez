import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

import travelBg from "../../assets/images/travel/bg.jpg";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CheckIn: new Date(),
      CheckOut: new Date(),
    };
  }
  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-170 d-table w-100"
          style={{ background: `url(${travelBg}) center center` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={6}>
                <div className="title-heading mt-4">
                  <h1 className="display-4 font-weight-bold text-white title-dark mb-3">
                    Booking tour <br /> made easy
                  </h1>
                  <p className="para-desc text-white-50">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div className="mt-4">
                    <Link
                      to="#"
                      className="btn btn-icon btn-pills btn-lg btn-light"
                    >
                      <i>
                        <FeatherIcon icon="arrow-down" className="icons" />
                      </i>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col lg={5} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Card className="shadow rounded border-0 ml-lg-5">
                  <CardBody>
                    <h5 className="card-title">You can start search here</h5>

                    <Form className="login-form">
                      <Row>
                        <Col md={12}>
                          <FormGroup>
                            <Label>Destination</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="map-pin"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <Input
                                type="text"
                                className="form-control pl-5"
                                placeholder="Whare"
                                name="s"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label> Check in : </Label>
                            <Flatpickr
                              value={this.state.CheckIn}
                              className="flatpickr flatpickr-input form-control"
                              placeholder="Pick a date"
                              options={{
                                altInput: true,
                                // altFormat: "F j, Y",
                                dateFormat: "Y-m-d",
                              }}
                              onChange={(date) => {
                                this.setState({ CheckIn: date });
                              }}
                            />
                          </FormGroup>
                        </Col>

                        <Col md={6}>
                          <FormGroup>
                            <Label> Check out : </Label>
                            <Flatpickr
                              value={this.state.CheckOut}
                              className="flatpickr flatpickr-input form-control"
                              placeholder="Pick a date"
                              options={{
                                altInput: true,
                                dateFormat: "Y-m-d",
                              }}
                              onChange={(date) => {
                                this.setState({ CheckOut: date });
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup>
                            <Label>Your Email</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                              <input
                                type="email"
                                className="form-control pl-5"
                                placeholder="Email"
                                name="email"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                I Accept{" "}
                                <Link to="#" className="text-primary">
                                  Terms And Condition
                                </Link>
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <button className="btn btn-block btn-success">
                            Search Now
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
