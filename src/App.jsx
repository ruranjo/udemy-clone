import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Test from './components/Test';
import Test2 from './components/Test2';




function App() {
  
  return (
    <>
      <Test/>
      <Test2/>
      <Navbar/>
      <BrowserRouter>
      
      </BrowserRouter>
    </>
  )
}

export default App;


/*
import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 */
