import { Component } from "react";
import { Button, Form, Col, Container, Dropdown, Image, Row } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

class PaginaProfilo extends Component {
  render() {
    return (
      <>
        <div>
          <Image src={logo} className="logo-profilo position-absolute top-0 start-0" alt="netflix logo" />
        </div>
        <Container fluid className="mt-5 col-6">
          <Row>
            <Col xs={12} className="text-white mb-1">
              <h1 className="fw-normal">Edit Profile</h1>
            </Col>
            <Row className="col-12 text-white border-top border-secondary py-3">
              <Col md={2} className="p-0">
                <div className="position-relative">
                  <Image src={avatar} className="img-fluid rounded" alt="Profile Image" />
                  <i className="editIcon bi bi-pencil-fill bg-black text-white border border-white rounded-circle position-absolute bottom-0 start-0"></i>
                </div>
              </Col>

              <Col xs={10}>
                <Form>
                  <p className="p-1 mb-3 custom-bg">Strive Student</p>
                  <div className="mb-3">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="custom-btn">
                        Languages:
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">English</Dropdown.Item>
                        <Dropdown.Item href="#">French</Dropdown.Item>
                        <Dropdown.Item href="#">Spanish</Dropdown.Item>
                        <Dropdown.Item href="#">Italian</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="border-top border-secondary">
                    <p className="my-2 my-color">Maturity Settings:</p>
                    <Button className="smallFont py-0 px-1 rounded-0 custom-bg my-2 custom-btn">ALL MATURITY RATINGS</Button>
                    <p className="smallFont my-2">Show titles of all maturity ratings for this profile.</p>
                    <Button className="secondText border border-secondary rounded-0 custom-btn py-1 px-3 my-2">EDIT</Button>
                  </div>
                  <div className="border-top border-secondary ">
                    <p className="my-3">Autoplay controls</p>
                    <div className="btn-group" role="group">
                      <input className="form-check-input me-2 bg-black" type="checkbox" value="" id="checkbox1" />
                      <label className="smallFont form-check-label" htmlFor="checkbox1">
                        Autoplay next episode in a series on all devices.
                      </label>
                      <input type="checkbox" className="me-2 form-check-input bg-black" id="checkbox2" value="" />
                      <label className="form-check-label smallFont" htmlFor="checkbox2">
                        Autoplay previes while browsing on all devices
                      </label>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>
          </Row>

          <Col xs={12} className=" mt-3 border-top border-secondary py-3">
            <Button className="btn text-black bg-white rounded-0 py-1 px-3 me-3">SAVE</Button>
            <Button className="btn secondText border border-secondary rounded-0 py-1 px-3 me-3">CANCEL</Button>
            <Button className="btn secondText border border-secondary rounded-0 py-1 px-3 me-3">DELETE PROFILE</Button>
          </Col>
        </Container>
      </>
    );
  }
}

export default PaginaProfilo;
