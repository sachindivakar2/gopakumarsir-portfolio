import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import logo from 'assets/images/logo.png';

const Footer = () => {
    return (
        <section className="pt-5 pb-4 bg-gradient3 position-relative">
            <Container>
                <Row>
                    <Col>
                        <Link className="navbar-brand me-lg-4 mb-2 me-auto d-flex align-items-center pt-0" to="#">
                            <img src={logo} height="30" alt="" />
                        </Link>
                        <p className="text-muted mb-4 w-50">
                            On the other hand, we denounce with righteous indignation and dislike men who are so
                            beguiled and demoralized.
                        </p>
                    </Col>

                    <Col sm={'auto'}>
                        <div className="px-md-5">
                            <h5 className="mb-4 mt-5 mt-md-0">Resources</h5>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Blog
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        FAQ
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Team of service
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Privacy policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={'auto'}>
                        <div className="ps-md-5">
                            <h5 className="mb-4 mt-5 mt-md-0">Company</h5>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        About
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-muted">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />

            </Container>
        </section>
    );
};

export default Footer;
