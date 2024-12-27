import React from 'react'
import Todolist from "../components/TodoList/Todolist";
import Rating from "../components/StarRating/Rating";
import ProgressContainer from "../components/Progressbar/ProgressContainer";
import Pagination from "../components/Pagination/Pagination";
import RadioDropdown from "../components/Dropdown/RadioDropdown";
import Accordion from "../components/Accordion/Accordion";
import Carousel from "../components/Carousel/Carousel";
import Timer from "../components/CountdownTimer/Timer";
import Comments from "../components/NestedComments/Comments";
import Form from "../components/FormValidation/Form";
import Checkbox from "../components/ChexboxDropdown/Checkbox";
import { useAuth } from '../context/AuthContext';
const Home = () => {
  const {isInitialized} = useAuth()
  console.log(isInitialized)
  return (
    <div>
       {/* <Todolist />
      <Rating />
      <ProgressContainer />
      <Pagination />
      <RadioDropdown />
      <Accordion />
      <Carousel />
      <Timer />
      <Comments /> */}
      <Form />
      {/* <Checkbox /> */}
    </div>
  )
}

export default Home
