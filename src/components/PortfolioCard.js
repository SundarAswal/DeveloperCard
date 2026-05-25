// components/PersonalInfo.js

import Header from "./Header";
import Bio from "./Bio";
import Avatar from "./Avatar";
import PersonalInfo from "./PersonalInfo";
import "./PortfolioCard.css";

function PortfolioCard() {
    return (
        <div className="portfolio-card">
            <Header />
            <div className="card-content">
                <Avatar />
                <PersonalInfo />
                <Bio />
            </div>
        </div>
    );
}
export default PortfolioCard;