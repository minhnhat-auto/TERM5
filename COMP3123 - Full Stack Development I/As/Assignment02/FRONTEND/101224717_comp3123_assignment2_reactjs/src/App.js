import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from '../src/pages/LoginPage.js';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header';



export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/add-employee/_add" element={<AddEdit/>} />
          <Route path="/add-employee/:id" element={<AddEdit/>} />
          <Route path='/view-employee/:id' element={<View/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

