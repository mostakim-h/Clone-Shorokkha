import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-items">
                    <img src="https://surokkha.gov.bd/static/media/logo_white.8ef9a1c4.svg" alt="" />
                </div>
                <div className="footer-items">
                    <Link to="/">FAQ</Link>
                    <Link to="/">Manual</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of service</Link>
                    <Link to="/">Other Affiliates</Link>
                </div>
                <div className="footer-items">
                    <p>Developed by - Department of ICT</p>
                    <img src="https://surokkha.gov.bd/static/media/ict.52410752.png" alt="" />
                </div>
                <div className="footer-items">
                    <p>Affiliates -</p>
                    <img src="https://surokkha.gov.bd/static/media/org.ed08c793.png" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Footer;