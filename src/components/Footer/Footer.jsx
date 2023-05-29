import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Nous travaillons chaque jour main dans la main avec des ateliers familiaux pour fabriquer les modèles les plus aboutis et confortables, aux finitions toujours plus soignées. Chaque atelier est sélectionné pour son savoir-faire spécifique: la richesse des étapes de la confection d’un mocassin, l’expertise de la cambrure parfaite pour nos talons ou encore la maîtrise du montage retourné qui procure une souplesse inégalée à nos ballerines et slippers.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            cité taoufik jellali sidi bouzid
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 26595164</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: khouloudhamdouni20@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        KH-store
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
