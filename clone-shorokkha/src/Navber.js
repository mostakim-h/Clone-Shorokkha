import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Navber = () => {

    return (
        <div className="navber">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="https://surokkha.gov.bd/static/media/logo-f.5c608b98.png" alt="" srcset="" />
                </div>
                <div className="nav-list">
                    <Link to='/'>Home</Link>
                    <Link to='/registration'>Registration</Link>
                    <Link to='/card'>Card</Link>
                    <Link to='/certificate'>Certificate</Link>
                    <Link to='/verify-certificate'>Verify Certificate</Link>
                    <button>বাংলা</button>
                </div>
            </div>
        </div>
    );
}
 
export default Navber;