import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/img-banner.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1> KH-STORE</h1>
                    <p>
                        VOTRE SATISFACTION 
                          NOTRE PRIORITE
                    </p>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
