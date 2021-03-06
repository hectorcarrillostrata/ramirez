import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageSignupThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link
            to="
          index"
            className="btn btn-icon btn-soft-primary"
          >
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </Link>
        </div>

        <section className="bg-home bg-circle-gradiant d-flex align-items-center">
          <div className="bg-overlay bg-overlay-white"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={5} md={8}>
                <Card className="login-page bg-white shadow rounded border-0">
                  <CardBody>
                    <h4 className="card-title text-center">Signup</h4>
                    <AvForm className="login-form mt-4">
                      <Row>
                        <Col md={6}>
                          <FormGroup className="position-relative">
                            <Label>
                              First name <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <AvField
                              type="text"
                              className="form-control pl-5"
                              errorMessage="Enter First Name"
                              validate={{ required: { value: true } }}
                              placeholder="First Name"
                              name="fname"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="position-relative">
                            <Label>
                              Last name <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user-check"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <AvField
                              type="text"
                              className="form-control pl-5"
                              errorMessage="Enter Last Name"
                              validate={{ required: { value: true } }}
                              placeholder="Last Name"
                              name="lname"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup className="position-relative">
                            <Label>
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="mail"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <AvField
                              type="email"
                              className="form-control pl-5"
                              errorMessage="Invalid Email"
                              validate={{
                                required: { value: true },
                                email: { value: true },
                              }}
                              placeholder="Email"
                              name="email"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup className="position-relative">
                            <Label>
                              Password <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="lock"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <AvField
                              type="password"
                              className="form-control pl-5"
                              errorMessage="Enter Last Name"
                              validate={{ required: { value: true } }}
                              name="password"
                              placeholder="Password"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup className="position-relative">
                            <Label>
                              Confirm Password{" "}
                              <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="lock"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <AvField
                              type="password"
                              className="form-control pl-5"
                              errorMessage="Enter Re-password"
                              validate={{
                                required: { value: true },
                                match: { value: "password" },
                              }}
                              name="repassword"
                              placeholder="Confirm Password"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={12}>
                          <FormGroup>
                            <div className="custom-control custom-checkbox">
                              <Input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                I Accept{" "}
                                <Link to="#" className="text-primary">
                                  Terms And Condition
                                </Link>
                              </Label>
                            </div>
                          </FormGroup>
                        </Col>
                        <Col lg={12} className="mb-0">
                          <Button color="primary" block>
                            Register
                          </Button>
                        </Col>
                        <Col lg={12} className="mt-4 text-center">
                          <h6>Or Signup With</h6>
                          <ul className="list-unstyled social-icon mb-0 mt-3">
                            <li className="list-inline-item">
                              <Link to="#" className="rounded mr-1">
                                <i>
                                  <FeatherIcon
                                    icon="facebook"
                                    className="fea icon-sm fea-social"
                                  />
                                </i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded mr-1">
                                <i>
                                  <FeatherIcon
                                    icon="github"
                                    className="fea icon-sm fea-social"
                                  />
                                </i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded mr-1">
                                <i>
                                  <FeatherIcon
                                    icon="twitter"
                                    className="fea icon-sm fea-social"
                                  />
                                </i>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#" className="rounded">
                                <i>
                                  <FeatherIcon
                                    icon="gitlab"
                                    className="fea icon-sm fea-social"
                                  />
                                </i>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                        <Col xs={12} className="text-center">
                          <p className="mb-0 mt-3">
                            <small className="text-dark mr-2">
                              Don't have an account ?
                            </small>{" "}
                            <Link
                              to="auth-signup-three"
                              className="text-dark font-weight-bold"
                            >
                              Sign Up
                            </Link>
                          </p>
                        </Col>
                      </Row>
                    </AvForm>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageSignupThree;
