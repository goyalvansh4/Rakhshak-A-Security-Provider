import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/Authentication/Login';
import SignUp from '../src/Authentication/SignUp';
import Rakshak from './components/Rakshak';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => (
  <>
  <Header />
  <Routes>
    <Route path="/*" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/rakshak/*" element={<Rakshak />} />
  </Routes>
  <Footer />
  </>
);

export default App;
