import React, { Component } from "react";
import "../Home/home.css";
import { Link } from 'react-router-dom';
import { Form, Row, Col, Container, Card } from "react-bootstrap";
import logoo from "../Home/logoo.png";
import crs from "../Home/course.png";
import { faLightbulb, faMoneyBill, faNewspaper, faPaintBrush, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Home extends Component {
  render() {
    return (
      <div className="lm">
        <div className="img">
          <div className="overlap__text">
            <h1>
              {" "}
              Welcome to <br /> Go Go Gaming
            </h1>
            <p>
              Find your favrouite games here, <br />
              Buy it or rent it. Choice is yours
            </p>
          </div>

          <div className="flier">
            <img src={logoo} alt="" />
          </div>
        </div>
        <Container className="topcrs">
          <Row>
            <Col className="col-lg-6 imagecrs">
              <img src={crs} alt="" id="crsimg" />
            </Col>
            <Col className="col-lg-6 txtcrs">
              <h1 className="hdcrs">What game is trending right now?</h1>
              <p className="pcrs">
                Studies have shown that playing video games regularly may increase gray matter in the brain and boost brain connectivity.
                (Gray matter is associated with muscle control, memories, perception, and spatial navigation.) So, be ready to jump in and PLAY!
                Click down below to know what's trending right now.
              </p>

              <Link to="/trending">
                <button type="button" className="btncrs">
                  Click Here
                </button>
              </Link>



            </Col>
          </Row>
        </Container>

        <div>
          <Container>
            <h1 className="toptitle">Feature that makes us Advanced</h1>

            <Row>
              <Col className="col-lg-4 rame">
                <Card className="caf">
                  <FontAwesomeIcon id="fale" icon={faMoneyBill} />
                  <Card.Body>
                    <Card.Title>Renting</Card.Title>
                    <Card.Text>Users can even rent the favrouite game of their choice.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-lg-4 rame">
                <Card className="caf">
                  <FontAwesomeIcon id="fale" icon={faThumbsUp} />
                  <Card.Body>
                    <Card.Title>Reviews and Rating</Card.Title>
                    <Card.Text>User can rate and comment the games</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-lg-4 rame">
                <Card className="caf">
                  <FontAwesomeIcon id="fale" icon={faNewspaper} />
                  <Card.Body>
                    <Card.Title>News of trending games</Card.Title>
                    <Card.Text>Frequently anouncement is done and updated news are provided by us.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-lg-4 rame">
                <Card className="caf">
                  <FontAwesomeIcon id="fale" icon={faPaintBrush} />
                  <Card.Body>
                    <Card.Title>Design and Developement</Card.Title>
                    <Card.Text>Viewers can get an interactive user experience from this site.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-lg-4 rame">
                <Card className="caf">
                  <FontAwesomeIcon id="fale" icon={faLightbulb} />
                  <Card.Body>
                    <Card.Title>Theme</Card.Title>
                    <Card.Text>Viewers can select either light theme or dark theme here.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>


            </Row>
          </Container>
        </div>

      </div>
    );
  }
}
export default Home;