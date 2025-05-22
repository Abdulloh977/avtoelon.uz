import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './RecentCars.css';

const RecentCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("https://avtoelon.onrender.com/car");
        setCars(response.data.cars); 
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="recent-cars">
      <h2 className="recent-title">Recent Cars</h2>
      <div className="car-list">
        {cars.slice(0, 4).map((car) => (
          <Link to={`/car/${car._id}`} key={car._id} className="car-card">
            <img src={car.image?.url} alt={car.title} width={200} height={200}/>
            <h3>{car.title}</h3>
            <p>{car.price}$</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentCars;
