// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  Media,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class PageContactTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  componentDidMount() {
    document.getElementById("topnav").classList.add("bg-white");
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  sendMail() {
    window.location.href = "mailto:contact@example.com";
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-5 mt-4">
          <Container fluid>
            <Row>
              <Col xs={12} className="p-0">
                <Card className=" map border-0">
                  <CardBody className="p-0">
                    <iframe
                      title="Landrick"
                      src="//www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13221.059684037598!2d-117.7309801!3d34.0627225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1fadd85564e27bc1!2sRamirez%20Servicio%20De%20Immigracion!5e0!3m2!1ses-419!2sus!4v1618217581662!5m2!1ses-419!2sus"
                      style={{ border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={5}
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0 "
              >
                <Card className="custom-form rounded shadow border-0">
                  <CardBody>
                    <div id="message"></div>
                    <Alert
                      color="primary"
                      isOpen={this.state.Contactvisible}
                      toggle={() => {
                        this.setState({
                          Contactvisible: !this.state.Contactvisible,
                        });
                      }}
                    >
                      Contact details send successfully.
                    </Alert>
                    <Form
                      method="post"
                      onSubmit={this.handleSubmit}
                      name="contact-form"
                      id="contact-form"
                    >
                      <Row>
                        <Col lg={6}>
                          <FormGroup>
                            <Label>
                              Your Name <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="user"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <Input
                              name="name"
                              id="name"
                              type="text"
                              className="form-control pl-5"
                              placeholder="First Name :"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg={6}>
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
                            <Input
                              name="email"
                              id="email"
                              type="email"
                              className="form-control pl-5"
                              placeholder="Your email :"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg={12}>
                          <FormGroup className="position-relative">
                            <Label>Comments</Label>
                            <div className="position-relative">
                              <i>
                                <FeatherIcon
                                  icon="message-circle"
                                  className="fea icon-sm icons"
                                />
                              </i>
                            </div>
                            <textarea
                              name="comments"
                              id="comments"
                              rows="4"
                              className="form-control pl-5"
                              placeholder="Your Message :"
                            ></textarea>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="12" className="text-center">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="submitBnt btn btn-primary btn-block"
                            value="Send Message"
                          />
                          <div id="simple-msg"></div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={7} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <div className="title-heading ml-lg-4">
                  <h4 className="mb-4">Contact Details</h4>
                  <p className="text-muted">
                    Start working with{" "}
                    <span className="text-primary font-weight-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <Media className="contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-m-md text-dark mr-3"
                        />
                      </i>
                    </div>
                    <Media body className="content">
                      <h5 className="title font-weight-bold mb-0">Email</h5>
                      <Link
                        to="#"
                        onClick={this.sendMail}
                        className="text-primary "
                      >
                        contact@example.com
                      </Link>
                    </Media>
                  </Media>

                  <Media className="contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="phone"
                          className="fea icon-m-md text-dark mr-3"
                        />
                      </i>
                    </div>
                    <Media body className="content">
                      <h5 className="title font-weight-bold mb-0">Phone</h5>
                      <Link
                        to="#"
                        onClick={this.callNumber}
                        className="text-primary "
                      >
                        +152 534-468-854
                      </Link>
                    </Media>
                  </Media>

                  <Media className="contact-detail align-items-center mt-3">
                    <div className="icon">
                      <i>
                        <FeatherIcon
                          icon="map-pin"
                          className="fea icon-m-md text-dark mr-3"
                        />
                      </i>
                    </div>
                    <Media body className="content">
                      <h5 className="title font-weight-bold mb-0">Location</h5>
                      <Link to="#" className="video-play-icon  text-primary">
                        View on Google map
                      </Link>
                    </Media>
                  </Media>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageContactTwo;
