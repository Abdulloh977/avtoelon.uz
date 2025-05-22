import { useEffect, useState } from "react";
import { Footer } from "../../companets/footer/footer";
import { Header } from "../../companets/heaader/header"
import './home.css';
import { useCategoryContext } from "../../context/cotegoryContaxt";
import { Link } from "react-router-dom";
import RecentCars from "../RecentCars/RecentCars";
const slides = [
  {
    image: "https://китайские-автомобили.рф/wp-content/uploads/2025/02/new_byd_yuan_plus_2.jpg",
    title: "Special Offer 1",
    description: "Discover the latest models and deals."
  },
  {
    image: "https://i.gaw.to/content/photos/62/09/620954-bmw-serie-3-2025-des-ameliorations-techniques-au-menu.jpeg",
    title: "Special Offer 2",
    description: "Discover the latest models and deals."
  },
  {
    image: "https://i0.wp.com/gaycarboys.com/wp-content/uploads/2021/04/2021-toypta-gazoo-gr-86-3.jpg?fit=2000%2C1333&ssl=1",
    title: "Special Offer 3",
    description: "Discover the latest models and deals."
  },
  {
    image: "https://chevrolet.uz/assets/img/sale/traverse.webp",
    title: "Special Offer 4",
    description: "Discover the latest models and deals."
  },
];


const Home = () => {

  
  
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval); 
  }, []);

  const { categories, loading } = useCategoryContext();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
    return (
      <>
        <Header />
        <section className="hero">
          <div className="slider-container">
            <div className="slide">
              <img src={slides[current].image} alt="Slide" className="slide-image" />
              <div className="slide-text">
                <h2>{slides[current].title}</h2>
                <p>{slides[current].description}</p>
              </div>
              <button className="nav-button left" onClick={prevSlide}>❮</button>
              <button className="nav-button right" onClick={nextSlide}>❯</button>
            </div>

            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={index === current ? "dot active" : "dot"}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="input_wrraper">
            <input className="input" type="text" placeholder="Search for cars..." />
          </div>
          <div className="brands-container">
            {categories.map((brand, index) => (
              <Link key={index} to={`/category/${brand._id}`} className="brand-card">
                <img src={brand.image.url} alt={brand.title} className="brand-image" />
                <h3 className="brand-name">{brand.title}</h3>
              </Link>
            ))}
          </div>
        </section>
        <RecentCars />
        <Footer />
      </>
    )
  }
  
  export default Home