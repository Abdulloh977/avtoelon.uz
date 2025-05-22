// carContaxt.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CarContext = createContext();

export const useCarContext = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]); 
  const [loading, setLoading] = useState(true);

  const token = "YOUR_TOKEN_HERE"; 

  const fetchCars = async () => {
  try {
    const response = await axios.get("https://avtoelon.onrender.com/car", {
      headers: { token },
    });

    if (Array.isArray(response.data.cars)) {
      setCars(response.data.cars); 
    } else {
      setCars([]);
      console.error("Expected array at response.data.cars but got:", response.data);
    }
  } catch (error) {
    console.error("Error fetching cars:", error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchCars();
  }, []);

  const addCar = async (carData) => {
    try {
      const formData = new FormData();
      formData.append("title", carData.title);
      formData.append("year", carData.year);
      formData.append("price", carData.price);
      formData.append("class", carData.carClass);
      formData.append("location", carData.location);
      formData.append("description", carData.description);
      formData.append("isActive", "true");
      formData.append("image", carData.image);
      formData.append("author", "65945d02ea9bf11f7071344c");
      formData.append("category", carData.category);

      const response = await axios.post(
        "https://avtoelon.onrender.com/car",
        formData,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCars((prevCars) => Array.isArray(prevCars) ? [...prevCars, response.data] : [response.data]);
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <CarContext.Provider value={{ cars, loading, addCar }}>
      {children}
    </CarContext.Provider>
  );
};
