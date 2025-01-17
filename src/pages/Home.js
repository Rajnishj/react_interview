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
import { images } from '../assets/assets';
import DynamicForm from '../components/DynamicForm/DynamicForm';
import DropdownSearch from '../components/DropdownSearch/DropdownSearch';
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
      <DynamicForm />
      {/* <img src={images.bigImage} alt='house' loading='eager'/> */}
      {/* <Checkbox /> */}
          {/* <DropdownSearch /> */}
    </div>
  )
}

export default Home
