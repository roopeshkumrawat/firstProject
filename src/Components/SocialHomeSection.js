import React, { Component } from 'react';
import './socialHomeSection.css';
import instaImg from "../images/Instagram-Logo.png";
import tiktokimg from "../images/TikTok-Logo.png";
import youtubeimg from "../images/YouTube-Logo.png";
import fbImg from "../images/facebook-img.png";
import twitterImg from "../images/twitter-img.png";
function SocialHomeSection() {
    return (
        <div className="container">
            <div style={{
                marginTop: 90 + "px",
                marginBottom: 90 + "px"
            }}>
                <h2 className='text-center' style={{
                    color: "#" + 413692,
                    textAlign: "center",
                    fontSize: 50 + "px",
                    fontWeight: 900,
                    lineHeight: 43 + "px"
                }}>The FUNctional way to inspire play! </h2>
                <p className="text-center" style={{
                    color: "#" + 1 + "A" + 1818,
                    textAlign: "center",
                    fontSize: 28 + "px",
                    fontWeight: 700,
                    lineHeight: 38 + "px"
                }}>Powerful Social Media + Authentic Family Creators = <br />Maximum Campaign Impact</p>

            </div>
            <div className="socialIcons justify-content-md-between justify-content-center">
                <a className="imageDiv p-3 shadow-lg rounded-3" href="">
                    <img src={instaImg} alt="" />
                </a>
                <a className="imageDiv p-3 shadow-lg rounded-3" href="">
                    <img src={tiktokimg} alt="" />
                </a>
                <a className="imageDiv p-3 shadow-lg rounded-3" href="">
                    <img src={youtubeimg} alt="" />
                </a>
                <a className="imageDiv p-3 shadow-lg rounded-3" href="">
                    <img src={fbImg} alt="" />
                </a>
                <a className="imageDiv p-3 shadow-lg rounded-3" href="">
                    <img src={twitterImg} alt="" />
                </a>
            </div>
        </div>
    )
}
export default SocialHomeSection;