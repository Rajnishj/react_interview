import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsInitialized(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem("token","abc")
    setIsInitialized(true)
  }
  const logout = () => {
    localStorage.clear()
    setIsInitialized(false)
  }

  return (
    <AuthContext.Provider value={{ isInitialized ,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
