import React, { Component } from "react";
import Logo from "./Logo";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">

                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand" href="https://www.google.com/">
                        <Logo></Logo>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://www.google.com/">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://www.google.com/">Article</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://www.google.com/">Press</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://www.google.com/">Contact Us</a>
                            </li>

                            <button type="button" className="btn btn-link login-main-btn">Login</button>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}
export default Navbar;
