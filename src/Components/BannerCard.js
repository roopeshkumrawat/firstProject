import React, { Component } from 'react';
import leftCard from "../images/left-card.png";
import rightCard from "../images/right-card.png";
function BannerCard() {
    return (
        <>
            <div className="container flex-wrap  mb-5 d-flex justify-content-between">
                <div className="card mb-5 d-flex flex-md-row flex-column align-itmes-center gap-3 rounded-3 bg-light shadow border-0 pb-4" style={{ maxWidth: 600 + "px" }}>
                    <img src={rightCard} style={{ width: 200 + "px", objectFit: 'contain' }} className="m-auto m-md-none card-img-top" alt="image not found" />
                    <div className="card-body ">
                        <h4 className="card-title">Toy Companies, Family
                            Brands, and Agencies </h4>
                        <p className="card-text">FUNfluential is specifically designed
                            with your brand in mind to easily find
                            and manage influencers for your
                            family-friendly products.</p>
                        <p className="card-text"><a href="#" className='text-decoration-none'>All at an affordable price</a></p>
                        <a href="#" className="btn btn-primary">Click to get more information</a>
                    </div>
                </div>
                <div className="card mb-5 d-flex flex-md-row flex-column align-itmes-center gap-3 rounded-3 bg-light shadow border-0 pb-4" style={{ maxWidth: 600 + "px" }}>
                    <img src={leftCard} style={{ width: 200 + "px", objectFit: 'contain' }} className="m-auto m-md-none card-img-top" alt="image not found" />
                    <div className="card-body ">
                        <h4 className="card-title">Toy & Family Influencers and Creators  </h4>
                        <p className="card-text">Join our FUNfluential family so toy & family lifestyle brands can offer opportunities to experience and promote their newest products.
                            family-friendly products.</p>
                        <p className="card-text"><a href="#" className='text-decoration-none'>P.S. It’s totally FREE to participate </a></p>
                        <a href="#" className="btn btn-primary">Click to request an invite</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BannerCard;