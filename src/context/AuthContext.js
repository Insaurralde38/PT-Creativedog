import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };

  const authenticateUser = async (email, password) => {
    try {
      const response = await fetch(
        // `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/local`,
        "https://jellyfish-app-mpahs.ondigitalocean.app/api/auth/local",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: email,
            password: password,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setUserData(data.user);
        return { success: true, data };
      } else {
        return { success: false, message: "Credenciales inválidas." };
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
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