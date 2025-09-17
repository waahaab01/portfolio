import { createContext, useEffect, useState, useContext } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDarkmode, toggleDarkmode] = useState(
    localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkmode === "dark") {
      root.classList.add("dark");
    }
    else{
        root.classList.remove("dark");
    }
    localStorage.setItem("theme" , isDarkmode)

  }), [isDarkmode];
  return (
    <ThemeContext.Provider
      value={{ isDarkmode: isDarkmode === "dark", toggleDarkmode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
