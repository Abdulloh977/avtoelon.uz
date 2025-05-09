import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="cantainer">
            <nav className="footer-nav">
               <Link to="/">Home</Link>
               <Link to="/about">About Us</Link>
               <Link to="/settings">Settings</Link>
               <Link to="/contact">Contact</Link>
            </nav>
                <p className="footer-copy">© 2025 Asadullokh. All Rights Reserved.</p>
            </div>
        </footer>
        </>
    )
}