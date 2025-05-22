import { createContext, useContext, useState, useEffect } from "react";

// Kontekst yaratish
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Masalan: localStorage yoki boshqa joydan userni yuklash
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Login yoki signup qilgandan so‘ng userni saqlash uchun funksiya
  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Istalgan joyda foydalanish uchun hook
export const useAuthContext = () => useContext(AuthContext);
