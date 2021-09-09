import React, { Component } from 'react';
import "./contact.css";
import { Card, Container } from 'react-bootstrap';
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Row, Col } from "react-bootstrap";
import call from "../Home/call.png";
import locate from "../Home/locate.png";
import email from "../Home/email.png"
import { faLightbulb, faMoneyBill, faNewspaper, faPaintBrush, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
export default class Contact extends Component {

    render() {
        return (
            <div>
                <div className="gera">
                    <Container>
                        <h1 className="hera">Contact Us Here</h1>
                        <p id="helen">We'd Love to Hear From you!! </p>
                    </Container>
                </div>
                <Container className="franky">
                    <Card className="alom">
                        <Card.Header className="marry">Share your excitement with us
                            <FontAwesomeIcon icon={faSmileWink}>
                            </FontAwesomeIcon>
                        </Card.Header>
                        <Card.Body>

                            <Row>
                                <Col className="col-lg-4 rame">
                                    <Card className="caf">

                                        <Card.Body>
                                            <Card.Title>Email Us </Card.Title>
                                            <div className="flier">
                                                {/* <img src={email} alt="" /> */}
                                            </div>
                                            <Card.Text>Send us an email at gogogaming0987@gmail.com</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 rame">
                                    <Card className="caf">

                                        <Card.Body>
                                            <Card.Title>Call Us</Card.Title>
                                            <div className="flier">
                                                {/* <img src={call} alt="" /> */}
                                            </div>
                                            <Card.Text>Give us a call at +977 9808978763</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="col-lg-4 rame">
                                    <Card className="caf">

                                        <Card.Body>
                                            <Card.Title>Location</Card.Title>
                                            <div className="flier">
                                                {/* <img src={locate} alt="" /> */}
                                            </div>
                                            <Card.Text classname="o">Come see us at Gyaneshwor Marg, Kathmandu 44600</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>


                            </Row>

                        </Card.Body>
                    </Card>
                    
                </Container>
            </div>
        )
    }
}
