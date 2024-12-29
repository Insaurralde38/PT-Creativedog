import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const token = localStorage.getItem("authToken");
    if (storedUser && token) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const login = () => setIsAuthenticated(true);

  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
  };

  const authenticateUser = async (email, password) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local`,
        {
          identifier: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const { data } = response;

      setIsAuthenticated(true);
      setUserData(data.user);

      localStorage.setItem("authToken", data.jwt);
      localStorage.setItem("userData", JSON.stringify(data.user));

      return { success: true, data };
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (error.response && error.response.data) {
        return { success: false, message: error.response.data.message || "Error al iniciar sesión." };
      }
      return { success: false, message: "Error al conectar con el servidor." };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        authenticateUser,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);