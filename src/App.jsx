import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store/Store'; // Import your Redux store
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CompanyProfile from './components/MainContent/CompanyProfile/CompanyProfile';
import Services from './components/MainContent/Services'; // Create a Services component
import Contact from './components/MainContent/Contact'; // Create a Contact component
import Projects from './components/MainContent/Projects'; // Replace with the actual path to your Projects component
import Clients from './components/MainContent/Clients'; // Replace with the actual path to your Clients component

function App() {

  return (
    <Provider store={store}> {/* Wrap your app with Provider */}
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<CompanyProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  )
}

export default App
