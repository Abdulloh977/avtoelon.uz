import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextProvider = createContext({});

export const useLoginContext = () => useContext(ContextProvider);

export const LoginContext = ({ children }) => {

  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
  
      // Agar localStorage'da user mavjud bo'lsa va noto'g'ri bo'lmasa
      if (storedUser && storedUser !== "undefined") {
        return JSON.parse(storedUser);
      } else {
        return {};
      }
    } catch (error) {
      console.error("User parsing error:", error);
      return {};
    }
  });
  const navigate = useNavigate()


  const postSignup = async (value) => {
    try {
      const response = await fetch("https://avtoelon.onrender.com/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
        redirect: "follow",
      });

      const result = await response.json();

      if (!!result.user) {
        setUser(result?.user);
        localStorage.setItem("user", JSON.stringify(result?.user));
        localStorage.setItem("token", JSON.stringify(result?.token));
      } else {
        throw new Error("Xatolik yuz berdi")
      }
      
      

    } catch (error) {
      console.error("Signup xatolik:", error);
    }
  };

  const postLogin = async (value) => {
    try {
      const response = await fetch("https://avtoelon.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
        redirect: "follow",
      });

      const result = await response.json();
      if (!!result.user) {
        setUser(result?.user);
        localStorage.setItem("user", JSON.stringify(result?.user));
        localStorage.setItem("token", JSON.stringify(result?.token));
        navigate("/")
      } else {
        throw new Error("Xatolik yuz berdi")
      }

      
    } catch (error) {
      console.error("Login xatolik:", error);
    }
  };

  return (
    <ContextProvider.Provider value={{ postSignup, postLogin, user, setUser }}>
      {children}
    </ContextProvider.Provider>
  );
};
