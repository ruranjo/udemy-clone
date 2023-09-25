import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import {Home} from './pages';
import SingleCoursePage from './pages/SingleCoursePage';
import {Cart} from './pages';
import Sidebar from './components/Sidebar';




function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Sidebar />
        <Routes>
          <Route path = "/udemy-clone/" element = {<Home/>} />
          <Route path = "/udemy-clone/courses/:id" element = {<SingleCoursePage />} />
          <Route path = "/udemy-clone/cart" element = {<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
