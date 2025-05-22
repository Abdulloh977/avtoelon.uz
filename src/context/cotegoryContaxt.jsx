import { createContext, useState, useEffect, useContext } from "react";


export const CategoryContext = createContext();


export const useCategoryContext = () => useContext(CategoryContext);


export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://avtoelon.onrender.com/category", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log('Apikode', result)
        setCategories(result.category);  
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Category fetch xato:", error);
        setLoading(false);
    });

  })

  return (
    <CategoryContext.Provider value={{ categories, loading }}>
      {children}
    </CategoryContext.Provider>
  );
};
