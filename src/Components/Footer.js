import React, { Component } from 'react';
import foorerLogo from "../images/logo-fun.png"
import toyBook from "../images/Toy-Book.png"
import popInsider from "../images/PopInsider.png"
import toyInsider from "../images/ToyInsiderlogo.png"
import instaFooterIcon from "../images/insta.png"
import tiktokFooterIcon from "../images/tiktok.png"
import youtubeFooterIcon from "../images/youtube.png"
import twitterFooterIcon from "../images/twiter.png"
import facebookFooterIcon from "../images/facebook-logo.png"

function Footer() {
    return (
        <div className="footer container d-flex flex-wrap my-5">
            <div className="col-sm-12 col-md-3">
                <div className="footer-logo">
                    <img className='w-75 m-auto d-block' src={foorerLogo} alt="" />
                </div>
                <p className='text-center'>Visit Our Sister Websites</p>
                <div className="another-logr d-flex flex-wrap">
                    <img className='w-50 m-auto object-fit-contain' src={toyBook} alt="" />
                    <img className='w-50 m-auto object-fit-contain' src={popInsider} alt="" />
                    <img className='w-50 m-auto object-fit-contain' src={toyInsider} alt="" />
                </div>
            </div>
            <div className="col-12 col-md-3">
                <ul className='list-unstyled text-center'>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                </ul>
            </div>
            <div className="col-12 col-md-3">
                <ul className='list-unstyled text-center'>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                    <li className='my-1 py-2'><a className='py-2 text-decoration-none text-dark' href="#">About Us</a></li>
                </ul>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column justify-content-between pb-5 ">
                <p className='text-center text-primary fw-bold'>Stay on The Inside</p>
                <div class="input-group mb-md-0 mb-4">
                    <input type="text" class="form-control" placeholder="Type to search..." aria-label="Recipient's username with two button addons" />
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
                <div className="footerSocialIcons d-flex flex-wrap justify-content-between">
                    <a href="#"><img src={instaFooterIcon} alt="" /></a>
                    <a href="#"><img src={tiktokFooterIcon} alt="" /></a>
                    <a href="#"><img src={youtubeFooterIcon} alt="" /></a>
                    <a href="#"><img src={twitterFooterIcon} alt="" /></a>
                    <a href="#"><img src={facebookFooterIcon} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;