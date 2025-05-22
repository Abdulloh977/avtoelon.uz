import { Footer } from "../../companets/footer/footer";
import { Header } from "../../companets/heaader/header";
import "./about.css";

export const About = () => {
    return (
        <>
            <Header />
            <div>
                <div className="about-container">
                  <h1 className="about-title">About Us</h1>
                   <p className="about-text">
                      Welcome to Car24 — your trusted platform for buying and selling cars easily and safely.
                      Our mission is to connect buyers and sellers in a simple, transparent way.
                    </p>
                    <p className="about-text">
                      Founded in 2025, Car24 aims to provide the best online marketplace for car enthusiasts.
                      Whether you are looking for a budget car or a luxury vehicle, we have something for everyone!
                    </p>
                    <p className="about-text">
                      Thank you for choosing Car24. Happy driving! 🚗
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}