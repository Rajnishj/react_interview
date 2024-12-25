import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Todolist from "./components/TodoList/Todolist";
import TodolistUndo from "./components/TodoList/TodolistUndo";

function App() {
  return (
    <>
      <Navbar />
      <Todolist />
    </>
  );
}

export default App;
