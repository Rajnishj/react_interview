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
import Carousel from "./components/Carousel/Carousel";
import Timer from "./components/CountdownTimer/Timer";
import Comments from "./components/NestedComments/Comments";
import Form from "./components/FormValidation/Form";

function App() {
  const [theme, setTheme] = useState("light"); // Default theme

 const toggleTheme = () => {
  setTheme((prev) => prev === "light" ? "dark" : "light");
 }
  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme}toggleTheme={toggleTheme}/>
      <div className=" w-[800px] m-auto">
      <Todolist />
      <Rating />
      <ProgressContainer />
      <Pagination />
      <RadioDropdown />
      <Accordion />
      <Carousel />
      <Timer />
      <Comments />
      <Form />
      </div>
    </div>
  );
}

export default App;
