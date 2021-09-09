import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6>About Our Website</h6>
                            <hr />
                            <p className="text-white">
                                Get the best Game with affordable price without compromising the quality. Choose your best fit.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h6>Quick Links</h6>
                            <hr />
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/products">Product</Link></div>
                            <div><Link to="/trending">Trending</Link></div>
                            <div><Link to="/contact">Contact</Link></div>
                            <div><Link to="/profile">Profile</Link></div>
                        </div>
                        <div className="col-md-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fa fa-home mr-3" /> Gyaneshwor, KTM
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3" /> gogogaming0987@gmail.com
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3" /> + 01428076
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3" /> + 977 9803910532
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/" className="btn-floating btn-sm btn-fb mx-1">
                                    <i className="fab fa-facebook-f"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.twitter.com/" className="btn-floating btn-sm btn-tw mx-1">
                                    <i className="fab fa-twitter"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-sm btn-gplus mx-1">
                                    <i className="fab fa-google-plus"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-sm btn-li mx-1">
                                    <i className="fab fa-linkedin-in"> </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#/" className="btn-floating btn-sm btn-dribbble mx-1">
                                    <i className="fab fa-dribbble"> </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-copyright text-center py-3">

                        &copy; {new Date().getFullYear()} Made By: <a> Team Undefined </a>

                    </div>
                </div>
            </div>
        </section>
    );

}

export default Footer;