// src/context/CarContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    try {
      const response = await axios.get("https://avtoelon.onrender.com/car");
      setCars(response.data.cars); // bu yerda cars ichida keladi
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, loading }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCars = () => useContext(CarContext);
