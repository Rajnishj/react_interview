import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Todolist from "./components/TodoList/Todolist";
import { useState } from "react";
import Rating from "./components/StarRating/Rating";
import ProgressContainer from "./components/Progressbar/ProgressContainer";
import Pagination from "./components/Pagination/Pagination";
import RadioDropdown from "./components/Dropdown/RadioDropdown";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [theme, setTheme] = useState("light"); // Default theme

 const toggleTheme = () => {
  setTheme((prev) => prev === "light" ? "dark" : "light");
 }
  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme}toggleTheme={toggleTheme}/>
      <Todolist />
      <Rating />
      <ProgressContainer />
      <Pagination />
      <RadioDropdown />
      <Accordion />
    </div>
  );
}

export default App;
