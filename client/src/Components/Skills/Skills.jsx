import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Rotate from 'react-reveal/Rotate';
import "./skills.scss";


export default function Skills() {

    return (
        <>
            <div className="container-fluid align-items-center text-center" id="skills">

                <Rotate>

                    <h4 className="skills-title">Skills</h4>

                    <Container>

                        <Row xs="3">

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-html5-plain colored fs-1"></i>
                                    <p>Hml</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-css3-plain colored fs-1"></i>
                                    <p>Css</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-javascript-plain colored fs-1"></i>
                                    <p>Javascript</p>
                                </div>
                            </Col>

                        </Row>

                    </Container>

                    <Container>

                        <Row xs="3">
                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-bootstrap-plain colored fs-1"></i>
                                    <p>Bootstrap</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-sass-original colored fs-1"></i>
                                    <p>Sass</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">

                                    <i className="devicon-react-original colored fs-1"></i>
                                    <p>React</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>

                    <Container>

                        <Row xs="3">

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-nodejs-plain colored fs-1"></i>
                                    <p>NodeJs</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-express-original colored text-success fs-1"></i>
                                    <p>Express</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-sequelize-plain colored fs-1"></i>
                                    <p>Sequelize</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">

                                    <i className="devicon-mocha-plain colored fs-1"></i>

                                    <p>Mocha/Chai</p>
                                </div>
                            </Col>

                        </Row>

                    </Container>

                    <Container>

                        <Row xs="3">
                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-mongodb-plain-wordmark colored fs-1"></i>
                                    <p>Mongodb</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-postgresql-plain colored fs-1"></i>
                                    <p>PostgreSql</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-mysql-plain colored fs-1"></i>
                                    <p>MySql</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>

                    <Container>

                        <Row xs="3">
                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-git-plain colored fs-1"></i>
                                    <p>Git</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-jira-plain colored fs-1"></i>
                                    <p>Jira</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i className="devicon-bitbucket-original colored fs-1"></i>
                                    <p>Bitbucket</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>

                    <Container>

                        <Row xs="3">
                            <Col>
                                <div className="skills-container">
                                    <i class="devicon-amazonwebservices-original colored fs-1"></i>
                                    <p>Aws</p>
                                </div>
                            </Col>

                            <Col>
                                <div className="skills-container">
                                    <i class="devicon-heroku-plain colored fs-1"></i>
                                    <p>Heroku</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>

                </Rotate>
            </div>
        </>
    );
}
